import React from 'react';
import { Box, Container } from '@mui/material';
import StyledToolbar from '../Styled-Toolbar/toolbar';
import StyledAppBar from './StyledAppBar';
import Tab3 from '../Tabs/Tab3';
import Tabs3 from '../Tabs/Tabs3';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import SelectLanguageButton from '../Button/LangSelector';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button3 from '../Button/Button3';

const pages = [
    { label: "page_tab_label-home", path: "/", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
    { label: "page_tab_label-vps", path: "/vps", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
    { label: "page_tab_label-games", path: "/games", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
    { label: "page_tab_label-web", path: "/web", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
]

function Logo()  {
    const theme = useTheme();

    return (
        <Box sx={{
            height: "40px",
            border: "1px solid red",
        }}>
            <img
                src={useMediaQuery(theme.breakpoints.up('tablet')) ? "/images/logo.png" : "/images/logo-square.png"}
                alt="NetRiv Logo"
                style={{
                    height: "100%",
                    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'invert(0)',
                }}
            />
        </Box>
    )
}

export function ResponsiveAppBar() {
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = React.useState(0);
    const theme = useTheme();

    return (
        <StyledAppBar position="static">
            <Container maxWidth='false'>
                <StyledToolbar disableGutters>
                    
                    <Logo />

                    <Box>
                        <Tabs3 value={tabIndex} onChange={e => {setTabIndex(e.target.tabIndex)}}>
                            {pages.map((page, index) => (
                                <Tab3 key={index} tabIndex={index} label={t(page.label)} icon={page.icon} />
                            ))}
                        </Tabs3>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: theme.spacing(1),
                        alignItems: "center",
                    }}>
                        <SelectLanguageButton />
                        <Button3
                            variant="contained"
                            color="primary"
                            startIcon={<PersonOutlineOutlinedIcon />}
                        >
                            {t("button_label-customer-area")}
                        </Button3>
                    </Box>


                </StyledToolbar>
            </Container>
        </StyledAppBar>
    )
}