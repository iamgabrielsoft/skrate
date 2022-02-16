import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LightTheme, MatCustomTheme } from './theme';

export const LightThemeProvider: React.FunctionComponent<
  PropsWithChildren<Record<string, unknown>>
> = ({ children }) => (
  <MuiThemeProvider theme={MatCustomTheme}>
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <React.Fragment>{children}</React.Fragment>
    </ThemeProvider>
  </MuiThemeProvider>
);
