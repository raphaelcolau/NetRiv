import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Button3 from '../components/Button/Button3';
import { managerLink } from '../utils/managerLink';
import PaperComponent from '../components/Paper/PaperComponent';
import { t } from 'i18next';
import { motion } from 'framer-motion';
import { ArrowIndicator } from '../components/Arrow/indicator';

function Offers(props) {
    const offers = props.offers;
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
                {t('page__vps-group--' + props.name)}
            </Typography>

            <Grid container spacing={2} justifyContent='space-around' alignItems="stretch">
                {offers.map((offer, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                    >
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
                                        href={managerLink(offer.cartLink, "full")}
                                    >
                                    {/* {t('page__home-bestoffers--button', {price: offer.price})} //Ne fonctionne pas */}
                                    {t('page__home-bestoffers--button').replace('%{price}', offer.price)}
                                    </Button3>

                                </Box>
                            </Paper>
                        </Grid>
                    </motion.div>
                ))}
            </Grid>

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

// eslint-disable-next-line no-unused-vars
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
                    cartLink: 'index.php/store/vps/vps-16',
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
            {/* <Description /> */}
            <Specs />
        </Box>
    )
}