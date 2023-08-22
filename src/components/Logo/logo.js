import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Logo()  {
    const theme = useTheme();

    return (
        <Box sx={{
            height: "44px",
            [theme.breakpoints.down('mobile_l')]: {
                display: "none",
            }
        }}>
            <Link to="/">
                <img
                    src={useMediaQuery(theme.breakpoints.up('tablet')) ? "/images/logo.png" : "/images/logo-square.png"}
                    alt="NetRiv Logo"
                    style={{
                        height: "100%",
                        filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)',
                    }}
                />
            </Link>
        </Box>
    )
}