import React from 'react';
import { Box, Container, IconButton, Menu, MenuItem } from '@mui/material';
import StyledToolbar from '../Styled-Toolbar/toolbar';
import StyledAppBar from './StyledAppBar';
import Tab3 from '../Tabs/Tab3';
import Tabs3 from '../Tabs/Tabs3';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button3 from '../Button/Button3';

const pages = [
    { label: "Accueil", path: "/", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
    { label: "VPS", path: "/vps", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
    { label: "Serveur Game", path: "/games", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
    { label: "Hébergement Web", path: "/web", icon: <FiberManualRecordIcon sx={{fontSize: 16}} /> },
]

const languages = [
    { label: "fr", full: "Français", value: "fr" },
    { label: "en", full: "English", value: "en" },
    { label: "es", full: "Español", value: "es" },
    { label: "de", full: "Deutsch", value: "de" },
]

function SelectLanguageButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

    return (
        <Box>
            <IconButton 
                variant="contained"
                color="primary"
                size="small"
                aria-label="select language"
                aria-controls={open ? 'language-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                FR
            </IconButton >

            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'language-button',
                }}
            >
                {languages.map((language, index) => (
                    <MenuItem key={index} onClick={handleClose}>{language.full}</MenuItem>
                ))}
            </Menu>

        </Box>
    );

}

export function ResponsiveAppBar() {
    const [tabIndex, setTabIndex] = React.useState(0);

    return (
        <StyledAppBar position="static">
            <Container maxWidth='false'>
                <StyledToolbar disableGutters>
                    <img 
                        src="/images/logo.png"
                        alt="NetRiv Logo"
                        height="40"
                    />

                    <Box>
                        <Tabs3 value={tabIndex} onChange={e => {setTabIndex(e.target.tabIndex)}}>
                            {pages.map((page, index) => (
                                <Tab3 key={index} tabIndex={index} label={page.label} icon={page.icon} />
                            ))}
                        </Tabs3>
                    </Box>

                    <Box>
                        <SelectLanguageButton />
                        <Button3
                            variant="contained"
                            color="primary"
                            startIcon={<PersonOutlineOutlinedIcon />}
                        >
                            Espace Client
                        </Button3>
                    </Box>


                </StyledToolbar>
            </Container>
        </StyledAppBar>
    )
}