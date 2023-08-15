import { styled } from '@mui/material/styles';
import { Toolbar } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    backgroundColor: theme.palette.surface.main,
    color: theme.palette.surface.contrastText,
    "& *": {
        textTransform: 'unset',
    },
    [theme.breakpoints.up('sm')]: {},
}));

export default StyledToolbar;