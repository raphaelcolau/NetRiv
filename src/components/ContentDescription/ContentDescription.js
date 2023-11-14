import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ContentDescription(props) {
    const theme = useTheme();
    const elements = props.elements;
    const maxWidth = theme.spacing(60);
    const maxHeight = theme.spacing(46);

    const gap = theme.spacing(6);

    const TextParagraph = (props) => {
        const title = props.title;
        const text = props.text;

        return (
            <Box sx={{
                marginBottom: theme.spacing(2),
                maxWidth: maxWidth,
                maxHeight: maxHeight,
                overflow: 'hidden',
            }}>
                <Box sx={{
                    marginBottom: theme.spacing(1),
                }}>
                    <Typography variant="h4" component="h2">{title}</Typography>
                </Box>
                <Box>
                    <Typography variant="body1" component="p">{text}</Typography>
                </Box>
            </Box>
        )
    }

    const Image = (props) => {
        const src = props.src;
        const alt = props.alt;

        return (
            <Box sx={{
                width: maxWidth,
                height: `calc(${maxWidth} * 0.6)`,
                borderRadius: theme.spacing(4),
                overflow: 'hidden',
            }}>
                <Avatar 
                    alt={alt}
                    src={src}
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 0,
                        [theme.breakpoints.down('mobile_l')]: {
                            display: 'none',
                        },
                    }}
                />
            </Box>
        )
    }

    return (
        <Box sx={{
            backgroundColor: theme.palette.tertiary.surface,
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            width: '100vw',
        }}>
            <Grid container spacing={2} gap={gap}>
                {elements.map((element, index) => (
                    <Grid key={index} container spacing={2} justifyContent='center' gap={gap} direction={index % 2 !== 0 ? 'row-reverse' : 'row'}>
                        <Grid item xs={2} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <Image src={element.imageSrc} alt={element.imageAlt} /></Grid>
                        <Grid item xs={10} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <TextParagraph title={element.title} text={element.text}/> </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}