export interface NavigationPaneItem {
  // page?: string;
  href?: string;
  anchor?: string;
  label: string;
  children?: Array<NavigationPaneItem>;
}
