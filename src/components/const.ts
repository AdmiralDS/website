import type { BorderRadiusInfo } from '@components/types';

export const TABLET_WIDTH = 1024;
export const MOBILE_WIDTH = 576;

export const LINKS = {
  STORYBOOK: 'https://admiralds.github.io/react-ui/',
  PIXSO: 'https://pixso.t1-pixso.ru/app/editor/0bmDY0CENBvcPkVPPpt6AA?icon_type=1&page-id=9%3A25',
};

export const AdmiralBorderRadius: BorderRadiusInfo = {
  geometrical: { label: 'Геометрический стиль', radius: 4 },
  rounded: { label: 'Скругленный стиль', radius: 8 },
  fullRounded: { label: 'Круглый стиль', radius: 10 },
} as const;
