import { ThemeProvider } from 'styled-components';
import { DropdownProvider, LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';
import { AdmiralT } from './AdmiralT';

export interface Props {
  theme: 'light' | 'dark';
  textType: 'Header' | 'Subtitle' | 'Body' | 'Caption';
  text: string;
}

export const WrappedAdmiralT = ({ theme, textType, text }: Props) => {
  const admiralTheme = theme === 'light' ? LIGHT_THEME : DARK_THEME;

  return (
    <ThemeProvider theme={admiralTheme}>
      <DropdownProvider>
        <AdmiralT text={text} textType={textType} />
      </DropdownProvider>
    </ThemeProvider>
  );
};
