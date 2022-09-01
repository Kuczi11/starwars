import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';

interface Details {
  title: string;
  releaseDate: string;
  openingCrawl: string;
}

const About = ({ title, releaseDate, openingCrawl }: Details) => {
  // const maxCharactersAmount = 130;
  // const slicedOpeningCrawl = openingCrawl
  //   .split(' ')
  //   .map((word) => {
  //     let charactersAmount = 0;
  //     if (charactersAmount < maxCharactersAmount) {
  //       charactersAmount += word.length;
  //       console.log(charactersAmount);
  //       return word;
  //     } else {
  //       return null;
  //     }
  //   })
  //   .join(' ');

  return (
    <>
      <Grid container mt={2}>
        <Grid item display="flex" justifyContent="space-between" xs={12}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h3">{releaseDate}</Typography>
        </Grid>
        <Grid item xs={12} my={1}>
          <Typography variant="h4">{openingCrawl}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: 'black' }} />
    </>
  );
};

export default About;
