import React, { SetStateAction } from 'react';
import { Grid, Typography } from '@mui/material';
import { Person } from 'components/SearchResults/SearchResults';
import StyledDialog from 'components/SearchResults/FilmDetails/styled/Dialog.styled';
import CloseIcon from '@mui/icons-material/Close';
import About from 'components/SearchResults/FilmDetails/About';
import StyledDialogContent from 'components/SearchResults/FilmDetails/styled/DialogContent.styled';

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
  const handleClose = () => {
    setIsOpen(false);
  };

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
            {person.films.map((film) => (
              <About key={film} filmPath={film} />
            ))}
          </Grid>
        </Grid>
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default FilmDetails;
