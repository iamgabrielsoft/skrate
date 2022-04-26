import '../src/common/global.css'; 
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import DashboardLayout from '../src/components/DashboardLayout';
import { theme } from '../src/common/theme'




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>    
            <title>Grade-arc</title>
        </Head>
      <ThemeProvider theme={theme}>
          <DashboardLayout>
              <Component {...pageProps} />
          </DashboardLayout>
      </ThemeProvider>
    </>

  )
}

export default MyApp
