export type ColorItemSize = 's' | 'l';

export const ItemColorArray = ['custom', 'yellow', 'orange', 'violet', 'blue'] as const;
export type ItemColor = (typeof ItemColorArray)[number];
