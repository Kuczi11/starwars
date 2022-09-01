import React, { useEffect, useState } from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';

interface Props {
  person: Person;
}

interface Homeworld {
  name: string;
  population: string;
}

interface Person {
  name: string;
  homeworld: string;
}

const SingleResult = ({ person }: Props) => {
  const [planetData, setPlanetData] = useState<Homeworld>({
    name: '',
    population: '',
  });

  useEffect(() => {
    const getPlanet = async () => {
      const response = await fetch(person.homeworld);
      const body = await response.json();
      setPlanetData(body);
    };
    void getPlanet();
  }, [person, setPlanetData]);

  return (
    <TableRow>
      <TableCell>
        <Typography variant="h3">{person.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h3">{planetData.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h3">{planetData.population}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default SingleResult;
