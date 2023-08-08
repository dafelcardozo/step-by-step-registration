'use client';
import { createTheme } from '@mui/material/styles';
import { pink, blueGrey,  } from '@mui/material/colors';

export const theme = createTheme({
  components: {
    MuiFormLabel: {
      defaultProps: {
        color:'primary'
      }
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
    secondary: pink,
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
      fontSize: '16px'
    }
  }
});