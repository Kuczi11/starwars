import React from 'react';
import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import headers from 'components/SearchResults/headers';

const SearchResults = () => {
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
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SearchResults;
