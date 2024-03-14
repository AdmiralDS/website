import { ThemeProvider } from 'styled-components';
import { DropdownProvider, LIGHT_THEME, Calendar } from '@admiral-ds/react-ui';
import '@admiral-ds/fonts/VTBGroupUI.css';

export const WrappedReactComponent = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <Calendar onChange={(e) => console.log(e)} />
      </DropdownProvider>
    </ThemeProvider>
  );
};
