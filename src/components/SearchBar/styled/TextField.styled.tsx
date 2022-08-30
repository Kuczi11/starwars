import styled from '@emotion/styled';
import { TextField, Theme } from '@mui/material';

const StyledInput = styled(TextField)((theme: Theme) => ({
  width: '100%',
  margin: '0 2rem',

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
