import React, { useEffect, useState } from 'react';
import { TableCell, Typography } from '@mui/material';
import StyledTableRow from 'components/SearchResults/SingleResult/styled/TableRow.styled';
import FilmDetails from 'components/SearchResults/FilmDetails';
import { Person } from 'components/SearchResults/SearchResults';

interface Props {
  person: Person;
}

interface Homeworld {
  name: string;
  population: string;
}

const SingleResult = ({ person }: Props) => {
  const [planetData, setPlanetData] = useState<Homeworld>({
    name: '',
    population: '',
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const getPlanet = async () => {
      const response = await fetch(person.homeworld);
      const body = await response.json();
      setPlanetData(body);
    };
    void getPlanet();
  }, [person, setPlanetData]);

  const handleDialogOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledTableRow onClick={handleDialogOpen}>
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
      {isOpen && (
        <FilmDetails isOpen={isOpen} setIsOpen={setIsOpen} person={person} />
      )}
    </>
  );
};

export default SingleResult;
