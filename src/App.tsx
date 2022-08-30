import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import SearchBar from 'components/SearchBar';
import Background from 'components/Background';
import SearchResults from 'components/SearchResults';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <SearchBar />
      <SearchResults />
    </ThemeProvider>
  );
};

export default App;
