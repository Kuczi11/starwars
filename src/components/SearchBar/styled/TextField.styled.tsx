import styled from '@emotion/styled';
import { TextField, Theme } from '@mui/material';

interface ThemeProps {
  theme: Theme;
}

const StyledInput = styled(TextField)(({ theme }: ThemeProps) => ({
  width: '100%',
  margin: '2rem',

  '@media (min-width: 900px)': {
    margin: '0 2rem',
  },

  '& fieldset': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },

  '& input': {
    color: theme.palette.primary.main,
  },

  '& label': {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },

  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
})) as unknown as typeof TextField;

export default StyledInput;
