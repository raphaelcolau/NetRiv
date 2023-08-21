import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const Button3 = styled(Button)(({ theme }) => ({
    borderRadius: 500,
    textTransform: 'unset',
    fontWeight: 500,
    lineHeight: 1.5,
    padding: theme.spacing(1.2, 2),
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none',
    },
}));

export default Button3;