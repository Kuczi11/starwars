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
      fontSize: '2rem',
      color: '#FFE81F',
      fontWeight: '500',
    },
    h3: {
      fontSize: '1.5rem',
      color: '#FFE81F',
      fontWeight: '500',
    },
  },
});

export default theme;
