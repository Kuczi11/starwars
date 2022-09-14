// import React from 'react';
// import { Button, Grid, Typography } from '@mui/material';
// import { Person } from 'components/SearchResults/SearchResults';
//
// interface Props {
//   pageIndex: number;
//   handleDecrementPage: () => void;
//   handleIncrementPage: () => void;
//   persons: Person[][];
// }
//
// const PageButtons = ({
//   pageIndex,
//   handleDecrementPage,
//   handleIncrementPage,
//   persons,
// }: Props) => {
//   return (
//     <Grid
//       item
//       display="flex"
//       justifyContent="space-between"
//       xs={12}
//       md={7}
//       py={5}
//     >
//       <Button
//         variant="outlined"
//         disabled={pageIndex === 0}
//         onClick={handleDecrementPage}
//       >
//         <Typography variant="h4" color="primary">
//           Previous page
//         </Typography>
//       </Button>
//       <Button
//         variant="outlined"
//         disabled={pageIndex === persons.length - 1}
//         onClick={handleIncrementPage}
//       >
//         <Typography variant="h4" color="primary">
//           Next page
//         </Typography>
//       </Button>
//     </Grid>
//   );
// };
//
// export default PageButtons;
