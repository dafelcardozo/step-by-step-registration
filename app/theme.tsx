'use client';
import { createTheme } from '@mui/material/styles';
import { blueGrey, yellow } from '@mui/material/colors';

export const theme = createTheme({
  components: {
    MuiFormLabel: {
      defaultProps: {
        color:'primary'
      },
      styleOverrides: {
        root: {
          color: '#022959',
          fontWeight: '400',
          fontSize: '12px',
          paddingTop: '10px',
          lineHeight: '2em'
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    }
  },
  palette: {
    primary: blueGrey,
    secondary: yellow,
  },
  typography:{
    fontFamily: ["Ubuntu-Bold", "Helvetica"].join(","),
    h1: {
        color: '#022959',
        fontWeight: '700',
        fontSize:'24px'
    },
    subtitle1: {
      color:'#9699AA',
      fontWeight:'400',
      fontSize: '16px',
      paddingTop:'15px',
      paddingBottom:'15px'
    },
    subtitle2: {
      color:'#022959',
      fontWeight:'bolder',
      fontSize: '16px',
      lineHeight:"18.4px",
    }
  }
});