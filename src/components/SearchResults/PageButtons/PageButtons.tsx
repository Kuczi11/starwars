import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

interface Props {
  handleDecrementPage: () => void;
  handleIncrementPage: () => void;
  disableNext: boolean;
  disablePrevious: boolean;
}

const PageButtons = ({
  handleDecrementPage,
  handleIncrementPage,
  disableNext,
  disablePrevious,
}: Props) => {
  return (
    <Grid
      item
      display="flex"
      justifyContent="space-between"
      xs={12}
      md={7}
      py={5}
    >
      <Button
        variant="outlined"
        disabled={disablePrevious}
        onClick={handleDecrementPage}
      >
        <Typography variant="h4" color="primary">
          Previous page
        </Typography>
      </Button>
      <Button
        variant="outlined"
        disabled={disableNext}
        onClick={handleIncrementPage}
      >
        <Typography variant="h4" color="primary">
          Next page
        </Typography>
      </Button>
    </Grid>
  );
};

export default PageButtons;

// export default null;
