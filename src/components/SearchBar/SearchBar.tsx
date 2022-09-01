import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import StyledInput from 'components/SearchBar/styled/TextField.styled';
import { Props } from 'components/SearchBar/types';
import { SEARCH_PEOPLE_URL } from 'services/apiConfig';

const SearchBar = ({ fetchPersons }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Grid container justifyContent="center" alignItems="center" pt={2}>
      <Grid
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        item
        xs={10}
        md={7}
        my={{ xs: 0, md: 5 }}
      >
        <StyledInput
          label="Search for you favourite character"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => fetchPersons(`${SEARCH_PEOPLE_URL}${inputValue}`)}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
