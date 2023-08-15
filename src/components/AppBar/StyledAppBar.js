import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.surface.main,
    color: theme.palette.surface.contrastText,
    boxShadow: 'none',
}));

export default StyledAppBar;