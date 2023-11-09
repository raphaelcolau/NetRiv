import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import PaperComponent from '../components/Paper/PaperComponent';
// import Carousel from '../components/Carousel/carousel3';
import { ArrowIndicator } from '../components/Arrow/indicator';
import OffersDisplay from '../components/OffersDisplay/OffersDisplay';
import PromotionalMsg from '../components/PromotionalMsg/PromotionalMsg';

// function CarouselBox() {
//     const theme = useTheme();

//     return (
//         <Box 
//             sx={{
//                 width: '100vw',
//                 height: theme.spacing(55),
//                 backgroundColor: theme.palette.tertiary.surface,
//             }}
//         >
//             <Carousel />
//         </Box>
//     )
// }

function About(props) {
    const theme = useTheme();
    const { t } = useTranslation();
    const contentWidth = theme.spacing(45);


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
    const offers = [
        {
            name: 'VPS - 4',
            price: 9.99,
            cpu: 2,
            ram: 4,
            storage: 40,
            bandwidth: 0.1,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/vps4.jpg',
            cartLink: 'index.php/store/vps/vps-4',
        },
        {
            name: 'VPS - 6',
            price: 14.99,
            cpu: 3,
            ram: 6,
            storage: 60,
            bandwidth: 0.25,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/vps6.jpg',
            cartLink: 'index.php/store/vps/vps-6',
        },
        {
            name: 'VPS - 8',
            price: 19.99,
            cpu: 4,
            ram: 8,
            storage: 80,
            bandwidth: 0.5,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/vps8.jpg',
            cartLink: 'index.php/store/vps/vps-8',
        },
        {
            name: 'VPS - 12',
            price: 29.99,
            cpu: 6,
            ram: 12,
            storage: 120,
            bandwidth: 1,
            ipv4: 1,
            ipv6: 1,
            image: '/images/offers/vps12.jpg',
            cartLink: 'index.php/store/vps/vps-12',
        },
    ];

    return (
        <Box>
            <OffersDisplay offers={offers} pageTitle="page__home-bestoffers--title" />
            {/* <CarouselBox /> */}
            <ArrowIndicator />
            <PromotionalMsg />
            <About />
        </Box>
    )
}