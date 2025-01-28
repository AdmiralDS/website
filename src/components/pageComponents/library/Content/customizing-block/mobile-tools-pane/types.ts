import type { ItemColor } from '../color-picker';
import type { AdmiralRadiusValue } from '@components/types';

export interface AdmiralThemeProps {
  isDarkTheme: boolean;
  radius: AdmiralRadiusValue;
  color: ItemColor;
}
