import React, { useEffect } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

interface Props {
  person: Person;
  fetchPlanet: (url: string) => Homeworld;
  homeworld?: string;
  population?: string;
}

interface Homeworld {
  name: string;
  population: string;
}

interface Person {
  name: string;
  homeworld: string;
}

const SingleResult = ({
  person,
  fetchPlanet,
  homeworld,
  population,
}: Props) => {
  useEffect(() => {
    fetchPlanet(person.homeworld);
  }, [person, fetchPlanet]);

  return (
    <TableRow key={person.name}>
      <TableCell align="right">
        <Typography variant="h3">{person.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h3">{homeworld}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h3">{population}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default SingleResult;
