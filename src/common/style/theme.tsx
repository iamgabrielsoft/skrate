import { createTheme, Theme } from '@mui/material';
import { DefaultTheme } from 'styled-components';
import { Colors, PaletteColors } from './styled';
// import Poppin from '../../../public/fonts/Poppins-Regular.ttf';

const palleteColors: PaletteColors = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: {
    light: '#8DE1FF',
    main: '#15A5E5',
    dark: '#074059',
  },
  secondary: {
    light: '#FFD9E2',
    main: '#EB1648',
  },
  success: {
    main: '#14A800',
  },
  error: {
    main: '#EB1648',
  },
  info: {
    main: '#074059',
  },
  text: {
    primary: '#09182C',
    disabled: '#6D7380',
    secondary: '#EB1648',
  },
  warning: {
    main: '#FFB800',
  },
};

export const colors: Colors & PaletteColors = {
  white: '#FFFFFF',
  black: '#000000',
  blue: {
    main: '#15A5E5',
    light: '#8DE1FF',
    dark: '#074059',
    blue10: '#EBF9FF',
  },
  red: {
    main: '#EB1648',
    red10: '#FFD9E2',
  },
  orange: {
    main: '#FFB800',
    orange10: '#FFF5DA',
  },
  green: {
    main: '#14A800',
  },
  grey: {
    main: '#6D7380',
    light: '#F5F9FF',
    dark: '#09182C',
    border: '#DEE1EB',
    gray80: '#5E6774',
  },
  ...palleteColors,
};

export const MatCustomTheme = createTheme({
  type: 'light',
  colors: colors,
  fonts: {
    primary:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
    baseSize: '14px',
  },
  palette: palleteColors,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Poppins',
          // src: `local("Poppins"), url(${Poppin}) format("truetype")`,
        },
        body: {
          fontFamily:
            '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
        },
        '& .MuiFormHelperText-root': {
          '&&&': {
            fontFamily:
              '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
          },
        },
        /**
         * Custom Scroll
         */
        'div::-webkit-scrollbar, body::-webkit-scrollbar': {
          width: 8,
        },
        'div::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb': {
          background: 'rgba(0,0,0,.3)',
          borderRadius: 4,
          '&:hover': {
            background: 'rgba(0,0,0,.4)',
          },
        },
        // End Custom Scroll
      },
    },
  },
});

export const LightTheme: DefaultTheme & Theme = {
  type: 'light',
  colors: colors,
  fonts: {
    primary:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
    baseSize: '14px',
  },
  ...MatCustomTheme,
};
