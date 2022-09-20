import React, { useState } from 'react';
import { Typography } from '@mui/material';
import StyledTableRow from 'components/SearchResults/SingleResult/styled/TableRow.styled';
import { Person } from 'components/SearchResults/SearchResults';
import StyledCell from 'components/SearchResults/styled/TableCell.styled';
import { useGetPlanetQuery } from 'store/query';
import FilmDetails from 'components/SearchResults/FilmDetails';

interface Props {
  person: Person;
}

interface Homeworld {
  name: string;
  population: string;
}

const SingleResult = ({ person }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isSuccess } = useGetPlanetQuery(person.homeworld);
  const planet: Homeworld = data;

  const handleDialogOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledTableRow onClick={handleDialogOpen}>
        <StyledCell>
          <Typography variant="h3">{person.name}</Typography>
        </StyledCell>
        {isSuccess && (
          <>
            <StyledCell align="right">
              <Typography variant="h3">{planet.name}</Typography>
            </StyledCell>
            <StyledCell align="right">
              <Typography variant="h3">{planet.population}</Typography>
            </StyledCell>
          </>
        )}
      </StyledTableRow>
      {isOpen && (
        <FilmDetails isOpen={isOpen} setIsOpen={setIsOpen} person={person} />
      )}
    </>
  );
};

export default SingleResult;
