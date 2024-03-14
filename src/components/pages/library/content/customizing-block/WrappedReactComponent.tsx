import { ThemeProvider } from 'styled-components';
import { DropdownProvider, FontsVTBGroup, LIGHT_THEME, Calendar } from '@admiral-ds/react-ui';

export const WrappedReactComponent = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <Calendar onChange={(e) => console.log(e)} />
      </DropdownProvider>
    </ThemeProvider>
  );
};
