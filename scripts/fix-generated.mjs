import fs from 'fs';
import path from 'path';

const dir = 'src/components/generated';
const skip = new Set(['Header.tsx', 'Hero.tsx', 'Criteria.tsx', 'Process.tsx']);
const needsI18n = new Set([
  'TrustedBy.tsx',
  'ProblemSolution.tsx',
  'Pricing.tsx',
  'Footer.tsx',
]);

function fixFile(filePath) {
  const name = path.basename(filePath);
  if (skip.has(name)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(
    /<i data-lucide="([^"]+)" className="([^"]*)"><\/i>/g,
    '<Icon name="$1" className="$2" />',
  );

  content = content.replace(
    /(<[a-zA-Z][^>]*?)\s+data-i18n="([^"]+)"([^>]*>)([\s\S]*?)<\/[a-zA-Z]+>/g,
    (match, open, key, close, _inner) => {
      const tag = open.match(/^<(\w+)/)?.[1] ?? 'span';
      return `${open}${close}{t('${key}')}</${tag}>`;
    },
  );

  content = content.replace(
    /(<h[1-6][^>]*?)\s+data-i18n="([^"]+)"([^>]*>)([\s\S]*?)<\/h[1-6]>/g,
    (match, open, key, close) => `${open}${close}{t('${key}')}</${open.match(/^<(h[1-6])/)?.[1]}>`,
  );

  content = content.replace(
    /(<p[^>]*?)\s+data-i18n="([^"]+)"([^>]*>)([\s\S]*?)<\/p>/g,
    (match, open, key, close) => `${open}${close}{t('${key}')}</p>`,
  );

  content = content.replace(
    /(<button[^>]*?)\s+data-i18n="([^"]+)"([^>]*>)([\s\S]*?)<\/button>/g,
    (match, open, key, close) => `${open}${close}{t('${key}')}</button>`,
  );

  content = content.replace(
    /(<li[^>]*?)\s+data-i18n="([^"]+)"([^>]*>)([\s\S]*?)<\/li>/g,
    (match, open, key, close) => `${open}${close}{t('${key}')}</li>`,
  );

  content = content.replace(
    /(<h4[^>]*?)\s+data-i18n="([^"]+)"([^>]*>)([\s\S]*?)<\/h4>/g,
    (match, open, key, close) => `${open}${close}{t('${key}')}</h4>`,
  );

  content = content.replace(
    /(<span[^>]*?)\s+data-i18n="([^"]+)"([^>]*>)([\s\S]*?)<\/span>/g,
    (match, open, key, close) => `${open}${close}{t('${key}')}</span>`,
  );

  const imports = ["import { Icon } from '../Icon';"];
  if (needsI18n.has(name)) {
    imports.push("import { useI18n } from '../../context/I18nContext';");
  }

  const fnName = name.replace('.tsx', '');
  if (needsI18n.has(name)) {
    content = content.replace(
      `export function ${fnName}() {\n  return (`,
      `export function ${fnName}() {\n  const { t } = useI18n();\n  return (`,
    );
  }

  content = content.replace(
    '// Auto-generated from index.html.bak - review and refine\n',
    `${imports.join('\n')}\n\n`,
  );

  fs.writeFileSync(filePath, content);
  console.log('Fixed', name);
}

for (const file of fs.readdirSync(dir)) {
  if (file.endsWith('.tsx')) fixFile(path.join(dir, file));
}
