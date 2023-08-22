import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const Button3 = styled(Button)(({ theme }) => ({
    borderRadius: 500,
    textTransform: 'unset',
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '0.95rem',
    padding: theme.spacing(1.5, 2.4),
    [theme.breakpoints.down('tablet')]: {
        padding: theme.spacing(1.5, 1.5),
    },
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none',
    },
}));

export default Button3;