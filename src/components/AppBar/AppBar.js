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
import Logo from '../Logo/logo.js'
import { Link } from 'react-router-dom';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button3 from '../Button/Button3';
import { managerLink } from '../../utils/managerLink.js';



export function ResponsiveAppBar() {
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = React.useState(0);
    const theme = useTheme();

    const suffix = useMediaQuery(theme.breakpoints.down('mobile_l')) ? "--short" : "";

    const pages = React.useMemo(() => [
        { label: "page_tab_label-home", path: "/", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
        { label: "page_tab_label-vps", path: "/vps", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
        { label: "page_tab_label-games" + suffix, path: "/games", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
        { label: "page_tab_label-web" + suffix, path: "/web", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
    ], [suffix]);

    React.useEffect(() => {
        const path = window.location.pathname;
        const index = pages.findIndex(page => page.path === path);
        if (index !== -1) setTabIndex(index);
        else setTabIndex(0);
    }, [tabIndex, pages]);

    return (
        <StyledAppBar 
            position="static"
            sx={{
                width: '100vw',
                overflow: 'hidden',
            }}
        >
            <Container 
                maxWidth='false'
                sx={{
                    [theme.breakpoints.down('mobile_m')]: {
                        padding: 0,
                    }
                }}
            >
                <StyledToolbar disableGutters>
                    
                    <Logo />

                    <Box>
                        <Tabs3 value={tabIndex} onChange={e => {setTabIndex(e.target.tabIndex)}}>
                            {pages.map((page, index) => (
                                <Tab3 
                                    key={index}
                                    tabIndex={index}
                                    label={t(page.label)}
                                    icon={page.icon}
                                    component={Link}
                                    to={page.path}
                                />
                            ))}
                        </Tabs3>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: theme.spacing(1),
                        alignItems: "center",
                    }}>

                        {useMediaQuery(theme.breakpoints.down('mobile_m')) ? null : <SelectLanguageButton />}

                        <Button3
                            variant="contained"
                            color="primary"
                            startIcon={ useMediaQuery(theme.breakpoints.up('mobile_l')) ? <PersonOutlineOutlinedIcon /> : null}
                            sx={{
                                [theme.breakpoints.down('mobile_l')]: {
                                    aspectRatio: "1/1",
                                    minWidth: 'unset',
                                },
                            }}
                            onClick={() => {
                                window.location.href = managerLink("/myaccount", "full");
                            }}
                        >
                            {useMediaQuery(theme.breakpoints.up('mobile_l')) ? t("button_label-customer-area") : <PersonOutlineOutlinedIcon />}
                        </Button3>
                        
                    </Box>


                </StyledToolbar>
            </Container>
        </StyledAppBar>
    )
}