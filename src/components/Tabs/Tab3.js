import { styled } from '@mui/material/styles';
import { Tab } from '@mui/material';

const Tab3 = styled(Tab)(({ theme }) => ({
    textTransform: 'unset',
    padding: theme.spacing(0, 2.5),
}));

export default Tab3;