import styled from '@emotion/styled';
import { CardMedia } from '@mui/material';

const StyledLogo = styled(CardMedia)({
  maxWidth: '15rem',
  aspectRatio: '640/386',
}) as unknown as typeof CardMedia;

export default StyledLogo;
