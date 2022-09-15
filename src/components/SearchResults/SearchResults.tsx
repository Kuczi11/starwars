import React from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { peopleDataApi } from 'store/query';
import { useSelector } from 'react-redux';
import headers from 'components/SearchResults/headers';
import StyledCell from 'components/SearchResults/styled/TableCell.styled';
import SingleResult from 'components/SearchResults/SingleResult';

export interface Props {
  inputValue: any;
}

export interface Person {
  name: string;
  homeworld: string;
  films: string[];
}

const SearchResults = ({ inputValue }: Props) => {
  const selector = peopleDataApi.endpoints.getPersonByName.select(inputValue);
  const queryData = useSelector(selector);
  const { data, isError, isLoading, isSuccess, isUninitialized } = queryData;

  return (
    <>
      {isUninitialized && null}
      {isError && alert('an error during fetching data occurred')}
      {isLoading && (
        <Typography mt={5} align="center" variant="h3">
          Loading data...
        </Typography>
      )}
      {isSuccess && (
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
                  {data.results.map((result: Person) => (
                    <SingleResult person={result} key={result.name} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SearchResults;
