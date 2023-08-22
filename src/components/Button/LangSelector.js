import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import i18n from 'i18next';

export default function SelectLanguageButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = lang => { 
        setAnchorEl(null);
        if (lang.length === 2 && typeof lang === "string") {i18n.changeLanguage(lang)};
    };

    const languages = (() => {
        const l = [];
        Object.keys(i18n.options.resources).forEach((key) => {
            l.push(key)
        })
        return l;
    })();

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
                sx={{
                    fontSize: "1.2rem",
                    padding: "0.5rem",
                }}
            >
                {i18n.language.toUpperCase()}
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
                {languages.map(language => (
                    <MenuItem key={language} onClick={() => {handleClose(language)}}>{language.toUpperCase()}</MenuItem>
                ))}
            </Menu>

        </Box>
    );

}