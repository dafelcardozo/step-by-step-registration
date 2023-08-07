
"use client"
import * as React from 'react';

import SideBar from '@/components/home/sidebar';
import { wrapper } from "@/components/shared/store";
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import { CssBaseline } from '@mui/material';


export default function MyApp() {
  const store = wrapper();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar />
      </ThemeProvider>
    </Provider>
  );
}
