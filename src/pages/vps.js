import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PaperComponent from '../components/Paper/PaperComponent';
import { t } from 'i18next';
import { ArrowIndicator } from '../components/Arrow/indicator';
import OffersDisplay from '../components/OffersDisplay/OffersDisplay';

function Offers(props) {
    const offers = props.offers;
    const theme = useTheme();

    return (
        <Box sx={{
            width: '100vw',
            paddingBottom: theme.spacing(15),
            [theme.breakpoints.up('laptop')]: {
                minHeight: '80vh',
            }
        }}>
            <OffersDisplay offers={offers} pageTitle={'page__vps-group--' + props.name} />
        </Box>
    )
}

function Specs() {
    const theme = useTheme();

    return (
        <Box 
            sx={{
                width: '100vw',
                paddingTop: theme.spacing(15),
                paddingBottom: theme.spacing(15),
            }}
        >
            <Grid container spacing={2} justifyContent='space-around' alignItems="stretch">
                <Grid item xs={12} md={4}> <PaperComponent title={t('page__games-offer-specs--processor')}>{t('page__games-offer-specs--processor-desc')}</PaperComponent> </Grid>
                <Grid item xs={12} md={4}> <PaperComponent title={t('page__games-offer-specs--antiddos')}>{t('page__games-offer-specs--antiddos-desc')}</PaperComponent> </Grid>
                <Grid item xs={12} md={4}> <PaperComponent title={t('page__games-offer-specs--storage')}>{t('page__games-offer-specs--storage-desc')}</PaperComponent> </Grid>
                <Grid item xs={12} md={4}> <PaperComponent title={t('page__games-offer-specs--pannel')}>{t('page__games-offer-specs--pannel-desc')}</PaperComponent> </Grid>
            </Grid>

        </Box>
    )
}

function Description() {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: theme.palette.tertiary.surface,
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
        }}>
            <Grid container spacing={2} justifyContent='space-around'>
                <Grid item xs={12} md={6}> <PaperComponent title="Minecraft Standard">{t('page__games-description-standard')}</PaperComponent> </Grid>
                <Grid item xs={12} md={6}> <PaperComponent title="Minecraft Advanced">{t('page__games-description-advanced')}</PaperComponent> </Grid>
                <Grid item xs={12} md={6}> <PaperComponent title="Minecraft Advanced Plus">{t('page__games-description-advanced-plus')}</PaperComponent> </Grid>
            </Grid>
        </Box>
    )
}

export default function PageVPS() {
    const products = [
        {
            group: "vps",
            offers: [
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
                    cartLink: 'order-steps/server/111',
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
                    cartLink: 'order-steps/server/108',
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
                {
                    name: 'VPS - 16',
                    price: 39.99,
                    cpu: 8,
                    ram: 16,
                    storage: 160,
                    bandwidth: 1,
                    ipv4: 1,
                    ipv6: 1,
                    image: '/images/offers/vps16.jpg',
                    cartLink: 'order-steps/server/109',
                },
            ]
        }
    ]

    return (
        <Box>
            {products.map((product, index) => {
                return <Offers name={product.group} offers={product.offers} key={index} />
            })}
            <ArrowIndicator />
            <Description />
            <Specs />
        </Box>
    )
}