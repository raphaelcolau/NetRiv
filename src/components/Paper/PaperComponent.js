import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function PaperComponent(props) {
    const theme = useTheme();
    const contentWidth = theme.spacing(45);
    const contentHeight = theme.spacing(35);

    return (
        <Paper elevation={0} sx={{
            backgroundColor: 'transparent',
            outline: '1px solid',
            outlineColor: theme.palette.outline.main,
            width: contentWidth,
            marginBottom: theme.spacing(2),
            borderRadius: theme.spacing(3),
            height: contentHeight,
            overflow: 'hidden',
        }}>
            <Box sx={{
                padding: theme.spacing(3),
            }}>
                <Typography 
                    variant="h5"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: '500',
                    }}
                >
                    {props.title}
                </Typography>
                <Typography variant="body1" gutterBottom>{props.children}</Typography>
            </Box>
        </Paper>
    )
}