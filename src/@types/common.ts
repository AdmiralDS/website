export interface NavItemProps {
  href: string;
  label: string;
  children?: Array<NavItemProps>
}