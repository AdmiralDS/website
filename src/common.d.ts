export interface NavItemProps {
  href: string;
  anchor: string;
  label: string;
  children?: Array<NavItemProps>;
}

export interface TimelineItem {
  size: 'l' | 's';
  active?: boolean;
  title?: string;
  detail?: string;
  textPosition?: 'top' | 'bottom';
  detailHasBorder?: boolean;
}

export type TimelineData = Array<TimelineItem>;

export type Theme = 'light' | 'dark';
