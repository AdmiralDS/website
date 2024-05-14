export interface NavigationItem {
  href?: string;
  anchor?: string;
  label: string;
  children?: Array<NavigationItem>;
}

export interface MenuItemProps {
  key: string;
  label: string;
  children?: Array<MenuItemProps>;
}

export type OnItemClickHandler = (key: string, item: NavigationItem) => void;
