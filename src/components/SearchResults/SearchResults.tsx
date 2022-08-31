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

interface Props {
  persons: Person[];
}

interface Person {
  name: string;
}

const SearchResults = ({ persons }: Props) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={7}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell align="right" key={header.id}>
                    <Typography variant="h2">{header.content}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((person) => (
                <TableRow key={person.name}>
                  <TableCell align="right">
                    <Typography variant="h3">{person.name}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SearchResults;
