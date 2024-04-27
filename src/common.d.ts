export interface NavItemProps {
  href: string;
  anchor: string;
  label: string;
  children?: Array<NavItemProps>;
}

export type Theme = 'light' | 'dark';
