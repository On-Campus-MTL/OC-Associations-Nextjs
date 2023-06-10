import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F8BE00',
    },
    secondary: {
      main: '#FF7C02',
    },
  },
});