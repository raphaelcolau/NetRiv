import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PaperComponent from '../components/Paper/PaperComponent';
import { t } from 'i18next';
import { ArrowIndicator } from '../components/Arrow/indicator';
import OffersDisplay from '../components/OffersDisplay/OffersDisplay';

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
                maxWidth: maxWidth,
                maxHeight: maxHeight,
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

                <Grid container spacing={2} justifyContent='center' gap={gap}>
                    <Grid item xs={2} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <Image src="https://shacknews-www.s3.amazonaws.com/assets/editorial/2023/04/minecraft-legends-golem.jpg" alt="Minecraft Standard" /></Grid>
                    <Grid item xs={10} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <TextParagraph title="Minecraft Standard" text={t('page__games-description-standard')}/> </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent='center' gap={gap} direction='row-reverse'>
                    <Grid item xs={2} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <Image src="https://shacknews-www.s3.amazonaws.com/assets/editorial/2023/04/minecraft-legends-sunset.jpg" alt="Minecraft Advanced" /></Grid>
                    <Grid item xs={10} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <TextParagraph title="Minecraft Advanced" text={t('page__games-description-advanced')}/> </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent='center' gap={gap}>
                    <Grid item xs={2} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <Image src="https://shacknews-www.s3.amazonaws.com/assets/editorial/2023/04/minecraft-legends-piglins.jpg" alt="Minecraft Advanced Plus" /></Grid>
                    <Grid item xs={10} md={6} sx={{width: `min(${maxWidth}, 100vw, 100%)`}}> <TextParagraph title="Minecraft Advanced Plus" text={t('page__games-description-advanced-plus')}/> </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default function PageGames() {
    const offers = [
            {
                name: "Standard",
                ram: "8",
                cpu: "2",
                storage: "30",
                storageType: "SSD NVMe",
                unlimitedSlot: true,
                bdd: "1",
                bddType: "MySQL",
                bddSize: "2",
                web: true,
                webSize: "10",
                price: '10',
                cartLink: "order-steps/server/112",
                image: "/images/offers/standard.jpg",
            },
            {
                name: "Advanced",
                ram: "10",
                cpu: "2",
                storage: "60",
                storageType: "SSD NVMe",
                unlimitedSlot: true,
                bdd: "2",
                bddType: "MySQL",
                bddSize: "2",
                web: true,
                webSize: "10",
                price: '15',
                cartLink: "order-steps/server/113",
                image: "/images/offers/advanced.jpg",
            },
            {
                name: "Advanced+",
                ram: "12",
                cpu: "3",
                storage: "80",
                storageType: "SSD NVMe",
                unlimitedSlot: true,
                bdd: "3",
                bddType: "MySQL",
                bddSize: "2",
                web: true,
                webSize: "10",
                price: '20',
                cartLink: "order-steps/server/114",
                image: "/images/offers/advancedplus.jpg",
            }
        ];

    return (
        <Box>
            <OffersDisplay offers={offers} pageTitle={"page__games-group--minecraft"} />
            <ArrowIndicator />
            <Description />
            <Specs />
        </Box>
    )
}