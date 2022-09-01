import styled from '@emotion/styled';
import { Dialog } from '@mui/material';
import { ThemeProps } from 'components/SearchBar/styled/TextField.styled';

const StyledDialog = styled(Dialog)(({ theme }: ThemeProps) => ({
  backgroundColor: theme.palette.info.main,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  '@media (min-width: 900px)': {
    width: '60%',
    height: '80%',
    left: '20%',
    top: '10%',
    border: `0.2rem solid ${theme.palette.primary.main}`,
    borderRadius: '2rem',
  },

  '& .MuiDialog-container': {
    alignItems: 'flex-start',
  },

  '& .MuiPaper-root': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: 0,
    maxWidth: 'none',
  },
})) as unknown as typeof Dialog;

export default StyledDialog;
