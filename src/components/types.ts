import type { AdmiralBorderRadius } from '@components/const';

export type AdmiralRadiusValue = 0 | 2 | 4 | 6 | 8 | 10;
export type BorderRadiusInfo = Record<string, { label: string; radius: AdmiralRadiusValue }>;

export type AdmiralRadiusStyleName = keyof typeof AdmiralBorderRadius;
