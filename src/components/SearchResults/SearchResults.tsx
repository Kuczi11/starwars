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
  const selector = peopleDataApi.endpoints.getPersonByName.select({
    name: inputValue,
    page,
  });
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
  const [peopleData, setPeopleData] = useState<Person[]>([]);

  useEffect(() => {
    isSuccess && setPeopleData(people.results);
    nextPageFetched && setPeopleData(nextPage.results);
  }, [people.results, isSuccess, nextPageFetched, nextPage.results]);

  const handleDecrementPage = () => {
    decrementPage();
    void trigger({ name: inputValue, page });
  };

  const handleIncrementPage = () => {
    incrementPage();
    void trigger({ name: inputValue, page });
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
              {peopleData?.map((result) => (
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
};

export default SearchResults;
