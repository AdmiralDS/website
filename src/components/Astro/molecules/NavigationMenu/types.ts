export interface NavigationMenuItem {
  href: string;
  label: string;
  children?: Array<NavigationMenuItem>;
}
