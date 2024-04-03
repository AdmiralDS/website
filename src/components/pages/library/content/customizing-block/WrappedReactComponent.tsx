import { ThemeProvider } from 'styled-components';
import { DropdownProvider, LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';
import '@admiral-ds/fonts/VTBGroupUI.css';
import { AdmiralCalendar } from './AdmiralCalendar';
import type { BorderRadiusType } from '@admiral-ds/react-ui';

export interface Props {
  theme: 'light' | 'dark';
  borderRadius: 0 | 2 | 4 | 6 | 8 | 10;
  color: string;
}

export const WrappedReactComponent = ({ theme, borderRadius = 4, color }: Props) => {
  const colorTheme = theme === 'light' ? LIGHT_THEME : DARK_THEME;
  colorTheme.color['Primary/Primary 60 Main'] = color;
  colorTheme.shape.borderRadiusKind = `Border radius ${borderRadius}` as BorderRadiusType;

  return (
    <ThemeProvider theme={colorTheme}>
      <DropdownProvider>
        <AdmiralCalendar />
      </DropdownProvider>
    </ThemeProvider>
  );
};
