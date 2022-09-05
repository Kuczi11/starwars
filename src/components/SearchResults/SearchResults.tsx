import React, { useState } from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import headers from 'components/SearchResults/headers';
import SingleResult from 'components/SearchResults/SingleResult';
import StyledCell from 'components/SearchResults/styled/TableCell.styled';
import PageButtons from 'components/SearchResults/PageButtons';

export interface Props {
  persons: Person[][];
}

export interface Person {
  name: string;
  homeworld: string;
  films: string[];
}

const SearchResults = ({ persons }: Props) => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const handleDecrementPage = () => {
    setPageIndex((prevState) => prevState - 1);
  };

  const handleIncrementPage = () => {
    setPageIndex((prevState) => prevState + 1);
  };

  return (
    <Grid container justifyContent="center" mt={{ xs: 2, md: 0 }}>
      <Grid item xs={12} md={7}>
        <TableContainer>
          <Table>
            <TableHead>
              {persons.length !== 0 && (
                <TableRow>
                  <StyledCell>
                    <Typography variant="h2">Name</Typography>
                  </StyledCell>
                  {headers.map((header) => (
                    <StyledCell align="right" key={header.id}>
                      <Typography variant="h2">{header.content}</Typography>
                    </StyledCell>
                  ))}
                </TableRow>
              )}
            </TableHead>
            <TableBody>
              {persons[pageIndex]?.map((person) => (
                <SingleResult key={person.name} person={person} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {persons.length > 1 && (
        <PageButtons
          pageIndex={pageIndex}
          handleDecrementPage={handleDecrementPage}
          handleIncrementPage={handleIncrementPage}
          persons={persons}
        />
      )}
    </Grid>
  );
};

export default SearchResults;
