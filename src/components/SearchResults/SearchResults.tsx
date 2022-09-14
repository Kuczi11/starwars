import React, { useEffect, useState } from 'react';
import {
  Grid,
  Table,
  // TableBody,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  // Typography,
} from '@mui/material';
import peopleDataApi, { useLazyGetPersonByNameQuery } from 'store/query';
// import headers from 'components/SearchResults/headers';
// import SingleResult from 'components/SearchResults/SingleResult';
// import StyledCell from 'components/SearchResults/styled/TableCell.styled';
// import peopleDataApi from 'store/query';
// import PageButtons from 'components/SearchResults/PageButtons';

export interface Props {
  persons?: Person[];
  nextPageUrl?: string;
  previousPageUrl?: string;
  queryState: any;
}

export interface Person {
  name: string;
  homeworld: string;
  films: string[];
}

const SearchResults = ({ queryState, previousPageUrl, nextPageUrl }: Props) => {
  return (
    <Grid container justifyContent="center" mt={{ xs: 2, md: 0 }}>
      <Grid item xs={12} md={7}>
        <TableContainer>
          <Table>
            {/* <TableHead> */}
            {/*  {peopleData.length !== 0 && ( */}
            {/*    <TableRow> */}
            {/*      <StyledCell> */}
            {/*        <Typography variant="h2">Name</Typography> */}
            {/*      </StyledCell> */}
            {/*      {headers.map((header) => ( */}
            {/*        <StyledCell align="right" key={header.id}> */}
            {/*          <Typography variant="h2">{header.content}</Typography> */}
            {/*        </StyledCell> */}
            {/*      ))} */}
            {/*    </TableRow> */}
            {/*  )} */}
            {/* </TableHead> */}
            {/* <TableBody> */}
            {/*  {persons[pageIndex]?.map((person) => ( */}
            {/*    <SingleResult key={person.name} person={person} /> */}
            {/*  ))} */}
            {/* </TableBody> */}
          </Table>
        </TableContainer>
      </Grid>
      {/* {persons.length > 1 && ( */}
      {/*  <PageButtons */}
      {/*    pageIndex={pageIndex} */}
      {/*    handleDecrementPage={handleDecrementPage} */}
      {/*    handleIncrementPage={handleIncrementPage} */}
      {/*    persons={persons} */}
      {/*  /> */}
      {/* )} */}
    </Grid>
  );
};

export default SearchResults;
