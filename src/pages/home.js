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
                height: '78vh',
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
                            height: theme.spacing(45),
                            width: theme.spacing(36),
                            color: theme.palette.primary.contrastText,
                        }}>

                            <Box sx={{
                                height: '100%',
                                width: '100%',
                                position: 'relative',
                            }}>


                                <Box
                                    sx={{
                                        padding: theme.spacing(2),
                                    }}
                                >
                                    <Typography variant="h3" sx={{marginBottom: theme.spacing(2)}}>{offer.name}</Typography>
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
                                        bottom: theme.spacing(2),
                                        right: theme.spacing(2),
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

export default function PageHome() {
    return (
        <Box>
            <BestOffers />
            <Carousel />
            <div style={{height: "15vh"}}></div>
            <About />
        </Box>
    )
}