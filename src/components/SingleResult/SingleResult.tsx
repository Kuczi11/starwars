import React, { useEffect, useState } from 'react';
import { TableCell, Typography } from '@mui/material';
import StyledTableRow from 'components/SingleResult/styled/TableRow.styled';

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
    <StyledTableRow>
      <TableCell>
        <Typography variant="h3">{person.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h3">{planetData.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h3">{planetData.population}</Typography>
      </TableCell>
    </StyledTableRow>
  );
};

export default SingleResult;
