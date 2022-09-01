import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import SearchBar from 'components/SearchBar';
import SearchResults from 'components/SearchResults';
import Intro from 'components/Intro';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Intro />
      <SearchBar />
      <SearchResults />
    </ThemeProvider>
  );
};

export default App;
