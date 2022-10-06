import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

interface Props {
  handleDecrementPage: () => void;
  handleIncrementPage: () => void;
}

const PageButtons = ({ handleDecrementPage, handleIncrementPage }: Props) => {
  return (
    <Grid
      item
      display="flex"
      justifyContent="space-between"
      xs={12}
      md={7}
      py={5}
    >
      <Button variant="outlined" onClick={handleDecrementPage}>
        <Typography variant="h4" color="primary">
          Previous page
        </Typography>
      </Button>
      <Button variant="outlined" onClick={handleIncrementPage}>
        <Typography variant="h4" color="primary">
          Next page
        </Typography>
      </Button>
    </Grid>
  );
};

export default PageButtons;

// export default null;
