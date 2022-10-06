/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {
  PeopleData,
  peopleDataApi,
  useLazyGetPersonByNameQuery,
} from 'store/query';
import { useSelector } from 'react-redux';
import headers from 'components/SearchResults/headers';
import StyledCell from 'components/SearchResults/styled/TableCell.styled';
import SingleResult from 'components/SearchResults/SingleResult';
import PageButtons from 'components/SearchResults/PageButtons';

export interface Props {
  inputValue: string;
  incrementPage: any;
  decrementPage: any;
  page: number;
}

export interface Person {
  name: string;
  homeworld: string;
  films: string[];
}

const SearchResults = ({
  inputValue,
  incrementPage,
  decrementPage,
  page,
}: Props) => {
  // @ts-expect-error
  const selector = peopleDataApi.endpoints.getPersonByName.select(inputValue);
  const queryData = useSelector(selector);
  const {
    data: people = {} as PeopleData,
    isError,
    isLoading,
    isSuccess,
  } = queryData;
  const [
    trigger,
    {
      data: nextPage = {} as PeopleData,
      isLoading: nextPageLoading,
      isError: nextPageLoadError,
      isSuccess: nextPageFetched,
    },
  ] = useLazyGetPersonByNameQuery();
  const [peopleData, setPeopleData] = useState(people);

  useEffect(() => {
    setPeopleData(people);
  }, [people]);

  const handleDecrementPage = () => {
    decrementPage();
    void trigger({ name: inputValue, page });
    setPeopleData(nextPage);
  };

  const handleIncrementPage = () => {
    incrementPage();
    void trigger({ name: inputValue, page });
    setPeopleData(nextPage);
  };

  if (isError || nextPageLoadError) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant="h3">Error during fetching data...</Typography>
      </Box>
    );
  }

  if (isLoading || nextPageLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (isSuccess || nextPageFetched) {
    return (
      <Grid container justifyContent="center" mt={{ xs: 2, md: 0 }}>
        <Grid item xs={12} md={7}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledCell>
                    <Typography variant="h2">Name</Typography>
                  </StyledCell>
                  {headers.map((header) => (
                    <StyledCell key={header.id} align="right">
                      <Typography variant="h2">{header.content}</Typography>
                    </StyledCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {peopleData.results.map((result) => (
                  <SingleResult person={result} key={result.name} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <PageButtons
          handleDecrementPage={handleDecrementPage}
          handleIncrementPage={handleIncrementPage}
        />
      </Grid>
    );
  }

  return null;
};

export default SearchResults;
