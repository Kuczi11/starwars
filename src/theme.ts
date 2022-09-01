import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 10,
  palette: {
    primary: {
      main: '#FFE81F',
    },
    info: {
      main: '#004c59',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      color: '#FFE81F',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '1.3rem',
      color: '#FFE81F',
      fontWeight: '500',
      '@media (min-width: 900px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '1rem',
      color: '#FFE81F',
      fontWeight: '500',
      '@media (min-width: 900px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '0.8rem',
      color: '#fff',
      fontWeight: '400',
      '@media (min-width: 900px)': {
        fontSize: '1.2rem',
      },
    },
  },
});

export default theme;
