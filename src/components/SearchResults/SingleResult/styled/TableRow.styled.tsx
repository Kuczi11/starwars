import styled from '@emotion/styled';
import { alpha, TableRow, Theme } from '@mui/material';

interface ThemeProps {
  theme: Theme;
}

const StyledTableRow = styled(TableRow)(({ theme }: ThemeProps) => ({
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
})) as unknown as typeof TableRow;

export default StyledTableRow;
