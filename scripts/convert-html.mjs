import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('index.html.bak', 'utf8');
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
if (!bodyMatch) throw new Error('No body found');

let body = bodyMatch[1].replace(/<script>[\s\S]*?<\/script>/, '');

const sections = [
  { name: 'Header', start: '<!-- Main Header -->', end: '<!-- Hero Section -->' },
  { name: 'Hero', start: '<!-- Hero Section -->', end: '<!-- Trusted By Section -->' },
  { name: 'TrustedBy', start: '<!-- Trusted By Section -->', end: '<!-- Problem & Solution Sections' },
  { name: 'ProblemSolution', start: '<!-- Problem & Solution Sections', end: '<!-- Website Criteria Section' },
  { name: 'Criteria', start: '<!-- Website Criteria Section', end: '<!-- Pricing Packages Section -->' },
  { name: 'Pricing', start: '<!-- Pricing Packages Section -->', end: '<!-- Technical Support Banner -->' },
  { name: 'TechnicalSupportBanner', start: '<!-- Technical Support Banner -->', end: '<!-- Mengapa TunamSam Section -->' },
  { name: 'WhyUs', start: '<!-- Mengapa TunamSam Section -->', end: '<!-- Pilihan Desain Section -->' },
  { name: 'DesignChoices', start: '<!-- Pilihan Desain Section -->', end: '<!-- Bagaimana Proses Section -->' },
  { name: 'Process', start: '<!-- Bagaimana Proses Section -->', end: '<!-- Layanan Tambahan Section -->' },
  { name: 'AdditionalServices', start: '<!-- Layanan Tambahan Section -->', end: '<footer id="contact"' },
  { name: 'Footer', start: '<footer id="contact"', end: '</footer>' },
];

function htmlToJsx(htmlStr) {
  let s = htmlStr;

  // Remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, '');

  // Convert class to className
  s = s.replace(/\bclass=/g, 'className=');

  // Fix asset paths
  s = s.replace(/src="assets\//g, 'src="/assets/');
  s = s.replace(/src="\/assets\//g, 'src="/assets/');
  s = s.replace(/src="assets\/ /g, 'src="/assets/');

  // Convert inline style strings to JSX objects for simple cases
  s = s.replace(/style="([^"]*)"/g, (_, styleStr) => {
    const props = styleStr.split(';').filter(Boolean).map(part => {
      const [key, val] = part.split(':').map(x => x.trim());
      if (!key || !val) return null;
      const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${camelKey}: '${val}'`;
    }).filter(Boolean);
    return `style={{ ${props.join(', ')} }}`;
  });

  // Self-close void elements
  s = s.replace(/<(img|input|br|hr|meta|link)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  // Convert data-i18n elements - keep as data-i18n for T component
  // onclick handlers - remove (handled in React)
  s = s.replace(/\s+onclick="[^"]*"/g, '');

  // stroke-width to strokeWidth in SVG
  s = s.replace(/stroke-width=/g, 'strokeWidth=');
  s = s.replace(/fill-opacity=/g, 'fillOpacity=');
  s = s.replace(/preserveAspectRatio=/g, 'preserveAspectRatio=');

  // Fix JSX issues with curly braces in className
  // Convert { in text that's not JSX - be careful

  return s.trim();
}

const outDir = 'src/components/generated';
fs.mkdirSync(outDir, { recursive: true });

for (const section of sections) {
  const startIdx = body.indexOf(section.start);
  const endIdx = body.indexOf(section.end, startIdx);
  if (startIdx === -1 || endIdx === -1) {
    console.error(`Failed to extract ${section.name}: start=${startIdx}, end=${endIdx}`);
    continue;
  }
  let chunk = body.slice(startIdx, endIdx === startIdx ? undefined : endIdx);
  if (section.name === 'Footer') {
    chunk = body.slice(startIdx, body.indexOf('</footer>', startIdx) + '</footer>'.length);
  }
  const jsx = htmlToJsx(chunk);
  const fileName = `${section.name}.tsx`;
  const content = `// Auto-generated from index.html.bak - review and refine\nexport function ${section.name}() {\n  return (\n    <>\n${jsx.split('\n').map(l => '      ' + l).join('\n')}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(outDir, fileName), content);
  console.log(`Wrote ${fileName} (${chunk.split('\n').length} lines)`);
}
