import { ThemeProvider } from 'styled-components';
import { DropdownProvider, LIGHT_THEME, DARK_THEME } from '@admiral-ds/react-ui';
import '@admiral-ds/fonts/VTBGroupUI.css';
import { AdmiralCalendar } from './AdmiralCalendar';
import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { hsvToHex } from '@components/pages/library/content/customizing-block/utils.ts';
import { AdmiralNotifications } from '@components/pages/library/content/customizing-block/AdmiralNotification.tsx';
import { AdmiralMenu } from '@components/pages/library/content/customizing-block/AdmiralMenu.tsx';

export interface Props {
  component: string;
  theme: 'light' | 'dark';
  borderRadius: 0 | 2 | 4 | 6 | 8 | 10;
  color: string;
  colorPickerValueHex: string;
  colorPickerValueHsv: { h: number; s: number; v: number; a: number };
}

const setMainLightThemeColors = (
  mainColor: string,
  colorPickerValueHsv: { h: number; s: number; v: number; a: number },
) => {
  const colorTheme = LIGHT_THEME;
  switch (mainColor) {
    case 'custom':
      colorTheme.color['Primary/Primary 10'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.07,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 20'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.13,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 30'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.35,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 40'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.56,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 50'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.77,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 60 Main'] = hsvToHex(colorPickerValueHsv);
      colorTheme.color['Primary/Primary 70'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s,
        v: colorPickerValueHsv.v * 0.8,
      });
      colorTheme.color['Primary/Primary 80'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s,
        v: colorPickerValueHsv.v * 0.6,
      });
      break;
    case 'yellow':
      colorTheme.color['Primary/Primary 10'] = '#FEF5D7';
      colorTheme.color['Primary/Primary 20'] = '#FEF5D7';
      colorTheme.color['Primary/Primary 30'] = '#FEE7A0';
      colorTheme.color['Primary/Primary 40'] = '#FDDD77';
      colorTheme.color['Primary/Primary 50'] = '#FDD14C';
      colorTheme.color['Primary/Primary 60 Main'] = '#FFC400';
      colorTheme.color['Primary/Primary 70'] = '#F0B902';
      colorTheme.color['Primary/Primary 80'] = '#DFAB00';
      break;
    case 'orange':
      colorTheme.color['Primary/Primary 10'] = '#FFF1E5';
      colorTheme.color['Primary/Primary 20'] = '#FFF1E5';
      colorTheme.color['Primary/Primary 30'] = '#FFDECE';
      colorTheme.color['Primary/Primary 40'] = '#FFB799';
      colorTheme.color['Primary/Primary 50'] = '#FF8D64';
      colorTheme.color['Primary/Primary 60 Main'] = '#FF5C22';
      colorTheme.color['Primary/Primary 70'] = '#D63F09';
      colorTheme.color['Primary/Primary 80'] = '#A63208';
      break;
    case 'violet':
      colorTheme.color['Primary/Primary 10'] = '#F6F2FF';
      colorTheme.color['Primary/Primary 20'] = '#EBE0FF';
      colorTheme.color['Primary/Primary 30'] = '#D4BBFF';
      colorTheme.color['Primary/Primary 40'] = '#BE95FF';
      colorTheme.color['Primary/Primary 50'] = '#A56EFF';
      colorTheme.color['Primary/Primary 60 Main'] = '#8A3FFC';
      colorTheme.color['Primary/Primary 70'] = '#6929C4';
      colorTheme.color['Primary/Primary 80'] = '#491D8B';
      break;
    case 'blue':
    default:
      colorTheme.color['Primary/Primary 10'] = '#EDF5FF';
      colorTheme.color['Primary/Primary 20'] = '#DDE9FF';
      colorTheme.color['Primary/Primary 30'] = '#A7C7FF';
      colorTheme.color['Primary/Primary 40'] = '#6FA3FF';
      colorTheme.color['Primary/Primary 50'] = '#3A85FF';
      colorTheme.color['Primary/Primary 60 Main'] = '#0062FF';
      colorTheme.color['Primary/Primary 70'] = '#0046E2';
      colorTheme.color['Primary/Primary 80'] = '#0132B0';
      break;
  }
  return colorTheme;
};

const setMainDarkThemeColors = (
  mainColor: string,
  colorPickerValueHsv: { h: number; s: number; v: number; a: number },
) => {
  const colorTheme = DARK_THEME;
  switch (mainColor) {
    case 'custom':
      colorTheme.color['Primary/Primary 10'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.07,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 20'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.13,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 30'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.35,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 40'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.56,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 50'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.77,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 60 Main'] = hsvToHex(colorPickerValueHsv);
      colorTheme.color['Primary/Primary 70'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.89,
        v: colorPickerValueHsv.v,
      });
      colorTheme.color['Primary/Primary 80'] = hsvToHex({
        h: colorPickerValueHsv.h,
        s: colorPickerValueHsv.s * 0.7,
        v: colorPickerValueHsv.v,
      });
      break;
    case 'yellow':
      colorTheme.color['Primary/Primary 10'] = '#1F2024';
      colorTheme.color['Primary/Primary 20'] = '#1F2024';
      colorTheme.color['Primary/Primary 30'] = '#CA9B00';
      colorTheme.color['Primary/Primary 40'] = '#DFAB00';
      colorTheme.color['Primary/Primary 50'] = '#F0B902';
      colorTheme.color['Primary/Primary 60 Main'] = '#FFC400';
      colorTheme.color['Primary/Primary 70'] = '#FDD14C';
      colorTheme.color['Primary/Primary 80'] = '#FDDD77';
      break;
    case 'orange':
      colorTheme.color['Primary/Primary 10'] = '#1F2024';
      colorTheme.color['Primary/Primary 20'] = '#1F2024';
      colorTheme.color['Primary/Primary 30'] = '#591C04';
      colorTheme.color['Primary/Primary 40'] = '#902C06';
      colorTheme.color['Primary/Primary 50'] = '#BC3B0D';
      colorTheme.color['Primary/Primary 60 Main'] = '#EF5018';
      colorTheme.color['Primary/Primary 70'] = '#FF662F';
      colorTheme.color['Primary/Primary 80'] = '#FF8559';
      break;
    case 'violet':
      colorTheme.color['Primary/Primary 10'] = '#1F2024';
      colorTheme.color['Primary/Primary 20'] = '#391968';
      colorTheme.color['Primary/Primary 30'] = '#491D8B';
      colorTheme.color['Primary/Primary 40'] = '#6929C4';
      colorTheme.color['Primary/Primary 50'] = '#8A3FFC';
      colorTheme.color['Primary/Primary 60 Main'] = '#A065FE';
      colorTheme.color['Primary/Primary 70'] = '#B587FF';
      colorTheme.color['Primary/Primary 80'] = '#CEB1FF';
      break;
    case 'blue':
    default:
      colorTheme.color['Primary/Primary 10'] = '#1F2024';
      colorTheme.color['Primary/Primary 20'] = '#162B67';
      colorTheme.color['Primary/Primary 30'] = '#022D9A';
      colorTheme.color['Primary/Primary 40'] = '#0142D3';
      colorTheme.color['Primary/Primary 50'] = '#0062FF';
      colorTheme.color['Primary/Primary 60 Main'] = '#3984FF';
      colorTheme.color['Primary/Primary 70'] = '#5290FF';
      colorTheme.color['Primary/Primary 80'] = '#689FFF';
      break;
  }
  return colorTheme;
};

const setMainThemeColors = (
  theme: 'light' | 'dark',
  mainColor: string,
  colorPickerValueHsv: { h: number; s: number; v: number; a: number },
) => {
  return theme === 'light'
    ? setMainLightThemeColors(mainColor, colorPickerValueHsv)
    : setMainDarkThemeColors(mainColor, colorPickerValueHsv);
};

export const WrappedReactComponent = ({ component, theme, borderRadius = 4, color, colorPickerValueHsv }: Props) => {
  const colorTheme = setMainThemeColors(theme, color, colorPickerValueHsv);
  colorTheme.shape.borderRadiusKind = `Border radius ${borderRadius}` as BorderRadiusType;
  const getComponent = () => {
    switch (component) {
      case 'Notification':
        return <AdmiralNotifications />;
      case 'Menu':
        return <AdmiralMenu borderRadius={borderRadius} />;
      case 'Calendar':
      default:
        return <AdmiralCalendar />;
    }
  };

  return (
    <ThemeProvider theme={colorTheme}>
      <DropdownProvider>{getComponent()}</DropdownProvider>
    </ThemeProvider>
  );
};
