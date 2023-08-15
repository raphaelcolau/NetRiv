import { styled } from '@mui/material/styles';
import { Tabs } from '@mui/material';

const Tabs3 = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))(({ theme }) => ({
    '& .MuiTabs-indicator': {
        display: "flex",
        justifyContent: "center",
        height: "fit-content",
        backgroundColor: "transparent",
    },
    '& .MuiTabs-indicatorSpan': {
        backgroundColor: theme.palette.primary.main,
        height: "3px",
        maxWidth: "44px",
        width: "50%",
        borderRadius: "3px 3px 0 0",
    },
}));

export default Tabs3;