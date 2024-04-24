import { ThemeProvider } from 'styled-components';
import { T, DropdownProvider, LIGHT_THEME, DARK_THEME, type ThemeTypographyType } from '@admiral-ds/react-ui';

export interface Props {
  theme: 'light' | 'dark';
  textType: 'Header' | 'Subtitle' | 'Body' | 'Caption';
  text: string;
}

function getTTypeName(textType: string): keyof ThemeTypographyType {
  switch (textType) {
    case 'Body':
      return 'Body/Body 2 Long';
    case 'Caption':
      return 'Caption/Caption 2';
    case 'Subtitle':
      return 'Subtitle/Subtitle 1';
    case 'Header':
    default:
      return 'Header/H1';
  }
}

export const WrappedAdmiralT = ({ theme, textType, text }: Props) => {
  const admiralTheme = theme === 'light' ? LIGHT_THEME : DARK_THEME;

  return (
    <ThemeProvider theme={admiralTheme}>
      <DropdownProvider>
        <T font={getTTypeName(textType)} style={{ color: '#35383a' }} as="div">
          {text}
        </T>
      </DropdownProvider>
    </ThemeProvider>
  );
};
