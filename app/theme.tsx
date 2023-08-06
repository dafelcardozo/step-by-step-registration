'use client';
import { createTheme } from '@mui/material/styles';
import { pink, blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: pink,
  },
  typography:{
    h1: {
        fontSize: '2rem',
        color: '#022959',
        fontWeight: 'bolder'
    },
    subtitle1: {
       fontWeight: '900',
       fontSize: '5rem',
       color: 'gold'
    }
  }
});