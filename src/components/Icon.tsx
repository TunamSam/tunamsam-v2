import type { ComponentType } from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

function toPascalCase(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

type IconProps = LucideProps & {
  name: string;
};

export function Icon({ name, ...props }: IconProps) {
  const iconName = toPascalCase(name) as keyof typeof LucideIcons;
  const LucideIcon = LucideIcons[iconName] as ComponentType<LucideProps> | undefined;

  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
