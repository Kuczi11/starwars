import React from 'react';
import { Grid, Typography } from '@mui/material';
import starWarsLogo from 'assets/Star_Wars_Logo..png';
import StyledLogo from 'components/Intro/styled/CardMedia.styled';

const Intro = () => {
  return (
    <Grid container justifyContent="center" mt={5}>
      <Grid item display="flex" justifyContent="center" xs={12} md={7}>
        <StyledLogo component="img" src={starWarsLogo} alt="star wars logo" />
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography align="center" variant="h1">
          Characters search engine
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Intro;
