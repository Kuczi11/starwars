import React from 'react';
import { CircularProgress, Divider, Grid, Typography } from '@mui/material';
import { useGetFilmQuery } from 'store/query';

const About = ({ filmPath }: { filmPath: string }) => {
  const { data: film, isLoading } = useGetFilmQuery(filmPath);
  const maxCharactersAmount = 130;
  let charactersAmount = 0;
  const slicedOpeningCrawl = film?.opening_crawl
    .split(' ')
    .map((word) => {
      charactersAmount += word.length;
      if (charactersAmount < maxCharactersAmount) {
        return word;
      }
      return null;
    })
    .join(' ');

  if (isLoading) {
    return (
      <Grid item display="flex" justifyContent="center" mb={2}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <>
      <Grid container mt={2}>
        <Grid item display="flex" justifyContent="space-between" xs={12}>
          <Typography variant="h3">{film?.title}</Typography>
          <Typography variant="h3">{film?.release_date}</Typography>
        </Grid>
        <Grid item xs={12} my={1}>
          <Typography variant="h4">{slicedOpeningCrawl}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: 'primary.main' }} />
    </>
  );
};

export default About;
