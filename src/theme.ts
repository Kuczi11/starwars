import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 10,
  palette: {
    primary: {
      main: '#FFE81F',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      color: '#FFE81F',
      fontWeight: 700,
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
  },
});

export default theme;
