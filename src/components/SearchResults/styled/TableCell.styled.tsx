import styled from '@emotion/styled';
import { TableCell } from '@mui/material';
import { ThemeProps } from 'components/SearchBar/styled/TextField.styled';

const StyledCell = styled(TableCell)(({ theme }: ThemeProps) => ({
  borderColor: theme.palette.primary.main,
})) as unknown as typeof TableCell;

export default StyledCell;
