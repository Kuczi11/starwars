import React from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import headers from 'components/SearchResults/headers';
import SingleResult from 'components/SingleResult';

interface Props {
  persons: Person[];
}

interface Person {
  name: string;
  homeworld: string;
}

const SearchResults = ({ persons }: Props) => {
  return (
    <Grid container justifyContent="center" mt={{ xs: 2, md: 0 }}>
      <Grid item xs={12} md={7}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h2">Name</Typography>
                </TableCell>
                {headers.map((header) => (
                  <TableCell align="right" key={header.id}>
                    <Typography variant="h2">{header.content}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((person) => (
                <SingleResult key={person.name} person={person} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SearchResults;
