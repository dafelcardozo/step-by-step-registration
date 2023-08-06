
"use client"
import * as React from 'react';

import SideBar from '@/components/home/sidebar';
import PersonalInfoForm from '@/components/home/personal-info-form';
import type { AppProps } from "next/app";
import { wrapper } from "@/components/shared/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {theme} from './theme'


export default function MyApp({ Component, pageProps }: AppProps) {
  const store = wrapper();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <SideBar {...pageProps}>
        <PersonalInfoForm />
      </SideBar>
      </ThemeProvider>
    </Provider>
  );
}
