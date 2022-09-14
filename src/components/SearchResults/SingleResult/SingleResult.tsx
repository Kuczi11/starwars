// import React, { useEffect, useState } from 'react';
// import { Typography } from '@mui/material';
// import StyledTableRow from 'components/SearchResults/SingleResult/styled/TableRow.styled';
// import FilmDetails from 'components/SearchResults/FilmDetails';
// import { Person } from 'components/SearchResults/SearchResults';
// import StyledCell from 'components/SearchResults/styled/TableCell.styled';
//
// interface Props {
//   person: Person;
// }
//
// interface Homeworld {
//   name: string;
//   population: string;
// }
//
// const SingleResult = ({ person }: Props) => {
//   const [planetData, setPlanetData] = useState<Homeworld>({
//     name: '',
//     population: '',
//   });
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//
//   useEffect(() => {
//     const getPlanet = async () => {
//       const response = await fetch(person.homeworld);
//       const body = await response.json();
//       setPlanetData(body);
//     };
//     void getPlanet();
//   }, [person, setPlanetData]);
//
//   const handleDialogOpen = () => {
//     setIsOpen((prevState) => !prevState);
//   };
//
//   return (
//     <>
//       <StyledTableRow onClick={handleDialogOpen}>
//         <StyledCell>
//           <Typography variant="h3">{person.name}</Typography>
//         </StyledCell>
//         <StyledCell align="right">
//           <Typography variant="h3">{planetData.name}</Typography>
//         </StyledCell>
//         <StyledCell align="right">
//           <Typography variant="h3">{planetData.population}</Typography>
//         </StyledCell>
//       </StyledTableRow>
//       {isOpen && (
//         <FilmDetails isOpen={isOpen} setIsOpen={setIsOpen} person={person} />
//       )}
//     </>
//   );
// };
//
// export default SingleResult;
