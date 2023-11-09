import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Button3 from '../Button/Button3';
import { managerLink } from '../../utils/managerLink';
import { motion } from 'framer-motion';

export default function OffersDisplay(props) {
    const { t } = useTranslation();
    const theme = useTheme();
    const offers = props.offers;
    const pageTitle = props.pageTitle;

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
                {t(pageTitle)}
            </Typography>

            <Grid container spacing={2} justifyContent='space-around' alignItems="stretch" gap={2}>
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
                        <Grid item xs={6} md={3}>
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
                                        { offer.name ? <Typography variant="h3" sx={{fontSize: '3.5rem', marginBottom: theme.spacing(3)}}>{offer.name}</Typography> : null }
                                        { offer.cpu ? <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.cpu}</span> vCore @ 3,8Ghz</Typography> : null }
                                        { offer.ram ? <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.ram}</span> {t('page__home-bestoffers--ram')} </Typography> : null }
                                        { offer.storage ? <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.storage}</span> {t('page__home-bestoffers--storage')} </Typography> : null }
                                        { offer.bandwidth ? <Typography variant="body1">● {t('page__home-bestoffers--bandwidth')} <span style={{fontWeight: 700}}>{offer.bandwidth >= 1 ? 1 : offer.bandwidth * 1000}</span> {offer.bandwidth >= 1 ? "Gbps" : "Mbps"} </Typography> : null }
                                        { offer.unlimitedSlot ? <Typography variant="body1">● <span style={{fontWeight: 700}}>{t('page__games-offer-minecraft--unlimited-slot')}</span></Typography> : null }
                                        { offer.bdd ? <Typography variant="body1">● <span style={{fontWeight: 700}}>{offer.bdd}</span> {t('page__games-offer-minecraft--bdd')} <span style={{fontWeight: 700}}>{offer.bddSize} {t('page__games-offer-minecraft--giga')} </span></Typography> : null }
                                        { offer.web ? <Typography variant="body1">●  {t('page__games-offer-minecraft--web')} <span style={{fontWeight: 700}}>{offer.webSize} {t('page__games-offer-minecraft--giga')}</span> </Typography> : null}
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