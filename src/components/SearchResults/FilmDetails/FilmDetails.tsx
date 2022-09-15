import React, { SetStateAction, useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography, Box } from '@mui/material';
import { Person } from 'components/SearchResults/SearchResults';
import StyledDialog from 'components/SearchResults/FilmDetails/styled/Dialog.styled';
import CloseIcon from '@mui/icons-material/Close';
import About from 'components/SearchResults/FilmDetails/About';
import StyledDialogContent from 'components/SearchResults/FilmDetails/styled/DialogContent.styled';
import { useGetFilmQuery } from 'store/query';

interface Props {
  isOpen: boolean;
  person: Person;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface FilmProps {
  title: string;
  release_date: string;
  opening_crawl: string;
}

const FilmDetails = ({ isOpen, person, setIsOpen }: Props) => {
  const [filmsData, setFilmsData] = useState<FilmProps[]>([]);
  const handleClose = () => {
    setIsOpen(false);
  };

  for (let i = 0; i < person.films.length; i++) {
    const { data } = useGetFilmQuery(person.films[i]);
  }

  return (
    <StyledDialog open={isOpen}>
      <StyledDialogContent>
        <Grid container alignItems="center" p={4}>
          <Grid item xs={10}>
            <Typography variant="h2">
              {`${person.name} appeared in episodes:`}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            justifyContent="flex-end"
            onClick={handleClose}
            xs={2}
          >
            <CloseIcon color="primary" fontSize="large" />
          </Grid>
          <Grid item xs={12} mt={5}>
            {filmsData.length < person.films.length ? (
              <Box display="flex" justifyContent="center">
                <CircularProgress color="primary" />
              </Box>
            ) : (
              filmsData.map((film) => (
                <About
                  key={film.title}
                  title={film.title}
                  releaseDate={film.release_date}
                  openingCrawl={film.opening_crawl}
                />
              ))
            )}
          </Grid>
        </Grid>
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default FilmDetails;
