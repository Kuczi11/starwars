import React from 'react';
import { Box, CardMedia } from '@mui/material';
import starsBackground from 'assets/stars-background.jpg';

const Background = () => {
  return (
    <Box position="fixed" width="100%" height="100vh" zIndex={-1}>
      <CardMedia
        component="img"
        src={starsBackground}
        alt="darth vader posture"
        sx={{ height: '100%' }}
      />
    </Box>
  );
};

export default Background;
