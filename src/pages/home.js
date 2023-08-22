import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Button3 from '../components/Button/Button3';

function BestOffers() {
    const offers = [
        {
            name: 'VPS - S',
            price: 4.99,
            cpu: 2,
            ram: 2,
            storage: 20,
            bandwidth: 0.1,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/S.jpg'
        },
        {
            name: 'VPS - M',
            price: 9.99,
            cpu: 4,
            ram: 4,
            storage: 40,
            bandwidth: 0.25,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/M.jpg'
        },
        {
            name: 'VPS - L',
            price: 19.99,
            cpu: 8,
            ram: 8,
            storage: 80,
            bandwidth: 0.5,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/L.jpg'
        },
        {
            name: 'VPS - XL',
            price: 39.99,
            cpu: 16,
            ram: 16,
            storage: 160,
            bandwidth: 1,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/XL.jpg'
        },
    ];
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box sx={{
            width: '100vw',
            paddingBottom: theme.spacing(15),
            [theme.breakpoints.up('laptop')]: {
                minHeight: '80vh',
            }
        }}>

            <Typography 
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    fontWeight: '500',
                    marginTop: theme.spacing(15),
                    marginBottom: theme.spacing(5),
                }}
            >
                {t('page__home-bestoffers--title')}
            </Typography>

            <Grid container spacing={2} justifyContent='space-around' alignItems="stretch">
                {offers.map((offer, index) => (
                    <Grid item xs={6} md={3} key={index}>
                        <Paper elevation={0} sx={{
                            backgroundImage: `url(${offer.image})`,
                            backgroundSize: 'cover',
                            borderRadius: theme.spacing(4),
                            overflow: 'hidden',
                            height: theme.spacing(52),
                            width: theme.spacing(42),
                            color: theme.palette.primary.contrastText,
                        }}>

                            <Box sx={{
                                height: '100%',
                                width: '100%',
                                position: 'relative',
                            }}>


                                <Box
                                    sx={{
                                        padding: theme.spacing(3),
                                    }}
                                >
                                    <Typography variant="h3" sx={{fontSize: '3.5rem', marginBottom: theme.spacing(3)}}>{offer.name}</Typography>
                                    <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.cpu}</span> vCore @ 3,8Ghz</Typography>
                                    <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.ram}</span> {t('page__home-bestoffers--ram')} </Typography>
                                    <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.storage}</span> {t('page__home-bestoffers--storage')} </Typography>
                                    <Typography variant="body1">● {t('page__home-bestoffers--bandwidth')} <span style={{fontWeight: 700}}>{offer.bandwidth >= 1 ? 1 : offer.bandwidth * 1000}</span> {offer.bandwidth >= 1 ? "Gbps" : "Mbps"} </Typography>
                                </Box>

                                <Button3 
                                    variant='contained'
                                    color='secondary'
                                    sx={{
                                        position: 'absolute',
                                        bottom: theme.spacing(3),
                                        right: theme.spacing(3),
                                    }}
                                >
                                   {/* {t('page__home-bestoffers--button', {price: offer.price})} //Ne fonctionne pas */}
                                   {t('page__home-bestoffers--button').replace('%{price}', offer.price)}
                                </Button3>

                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

        </Box>
    )
}

function Carousel() {
    const theme = useTheme();

    return (
        <Box 
            sx={{
                width: '100vw',
                height: theme.spacing(55),
                backgroundColor: theme.palette.tertiary.surface,
            }}
        >

        </Box>
    )
}

function About(props) {
    const theme = useTheme();
    const { t } = useTranslation();
    const contentWidth = theme.spacing(45);
    const contentHeight = theme.spacing(35);

    const PaperComponent = (props) => (
        <Paper elevation={0} sx={{
            backgroundColor: theme.palette.background.default,
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

    return (
        <Box 
            sx={{
                width: '100vw',
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Grid 
                container
                justifyContent="space-around"
                gap={3}
                sx={{
                    paddingTop: theme.spacing(10),
                    paddingBottom: theme.spacing(10),
                    width: 'fit-content',
                }}
            >
                <Grid item md={12} xl={4} sx={{
                    [theme.breakpoints.up('laptop')]: {
                        maxWidth: contentWidth,
                    },
                    [theme.breakpoints.down('laptop')]: {
                        maxWidth: '85%',
                    },
                }}>
                    <Typography variant="h4" component="h1" gutterBottom>{t('page__home-about--title')}</Typography>
                    <Typography variant="body1" gutterBottom>{t('page__home-about--text1')}</Typography>
                    <Typography variant="body1" gutterBottom>{t('page__home-about--text2')}</Typography>
                </Grid>

                <Grid item xs={12} md={4} sx={{maxWidth: contentWidth}}>
                    <PaperComponent title={t('page__home-about--paper1-title')}>{t('page__home-about--paper1-text')}</PaperComponent>
                    <PaperComponent title={t('page__home-about--paper2-title')}>{t('page__home-about--paper2-text')}</PaperComponent>
                </Grid>

                <Grid item xs={12} md={4} sx={{maxWidth: contentWidth}}>
                    <PaperComponent title={t('page__home-about--paper3-title')}>{t('page__home-about--paper3-text')}</PaperComponent>
                    <PaperComponent title={t('page__home-about--paper4-title')}>{t('page__home-about--paper4-text')}</PaperComponent>
                </Grid>

            </Grid>
        </Box>
    )
}

export default function PageHome() {
    return (
        <Box>
            <BestOffers />
            <Carousel />
            <About />
        </Box>
    )
}