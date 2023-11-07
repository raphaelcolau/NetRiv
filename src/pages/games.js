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
                    textTransform: 'capitalize',
                }}
            >
                {t('page__games-group--' + props.name)}
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
                                        <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.ram}</span> {t('page__home-bestoffers--ram')} </Typography>
                                        <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.cpu}</span> vCore @ 3,8Ghz</Typography>
                                        <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.storage}</span> {t('page__home-bestoffers--storage')} </Typography>
                                        <Typography variant="body1">● <span style={{fontWeight: 700}}>{t('page__games-offer-minecraft--unlimited-slot')}</span></Typography>
                                        {/* <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.bdd}</span> {t('page__games-offer-minecraft--bdd')} <span style={{fontWeight: 700}}>{offer.bddSize} {t('page__games-offer-minecraft--giga')} </span></Typography> */}
                                        {/* {offer.web ? <Typography variant="body1">●  {t('page__games-offer-minecraft--web')} <span style={{fontWeight: 700}}>{offer.webSize} {t('page__games-offer-minecraft--giga')}</span> </Typography> : null} */}
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

export default function PageGames() {
    const products = [
        {
            group: "minecraft",
            offers: [
                {
                    name: "Standard",
                    ram: "8",
                    cpu: "2",
                    storage: "30",
                    storageType: "SSD NVMe",
                    bdd: "1",
                    bddType: "MySQL",
                    bddSize: "2",
                    web: true,
                    webSize: "10",
                    price: '10',
                    cartLink: "index.php/store/minecraft/minecraft-standard",
                    image: "/images/offers/standard.jpg",
                },
                {
                    name: "Advanced",
                    ram: "10",
                    cpu: "2",
                    storage: "60",
                    storageType: "SSD NVMe",
                    bdd: "2",
                    bddType: "MySQL",
                    bddSize: "2",
                    web: true,
                    webSize: "10",
                    price: '15',
                    cartLink: "index.php/store/minecraft/minecraft-advanced",
                    image: "/images/offers/advanced.jpg",
                },
                {
                    name: "Advanced+",
                    ram: "12",
                    cpu: "3",
                    storage: "80",
                    storageType: "SSD NVMe",
                    bdd: "3",
                    bddType: "MySQL",
                    bddSize: "2",
                    web: true,
                    webSize: "10",
                    price: '20',
                    cartLink: "index.php/store/minecraft/minecraft-advanced-plus",
                    image: "/images/offers/advancedplus.jpg",
                }
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