import 'styled-components';
import { Theme } from '@mui/material/styles';
import { ColorProperty } from 'csstype';

export type PaletteColors = {
  common: {
    black: ColorProperty;
    white: ColorProperty;
  };
  primary: {
    light: ColorProperty;
    main: ColorProperty;
    dark: ColorProperty;
  };
  secondary: {
    light: ColorProperty;
    main: ColorProperty;
  };
  success: {
    main: ColorProperty;
  };
  text: {
    disabled: ColorProperty;
    primary: ColorProperty;
    secondary: ColorProperty;
  };
  info: {
    main: ColorProperty;
  };
  error: {
    main: ColorProperty;
  };
  warning: {
    main: ColorProperty;
  };
};

export interface Colors {
  white: ColorProperty;
  black: ColorProperty;

  blue: {
    main: ColorProperty;
    light: ColorProperty;
    dark: ColorProperty;
    blue10: ColorProperty;
  };
  red: {
    main: ColorProperty;
    red10: ColorProperty;
  };
  orange: {
    main: ColorProperty;
    orange10: ColorProperty;
  };
  green: {
    main: ColorProperty;
  };
  grey: {
    main: ColorProperty;
    light: ColorProperty;
    dark: ColorProperty;
    border: ColorProperty;
    gray80: ColorProperty;
  };
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line
  interface Theme extends DefaultTheme {}
  interface ThemeOptions extends DefaultTheme {
    type: 'light' | 'dark';
    colors: Colors & PaletteColors;
    fonts: {
      primary: CSS.FontFamilyProperty;
      baseSize: CSS.FontSizeProperty;
    };
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    type: 'light' | 'dark';
    colors: Colors & PaletteColors;
    fonts: {
      primary: CSS.FontFamilyProperty;
      baseSize: CSS.FontSizeProperty;
    };
  }
}
