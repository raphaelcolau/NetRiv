import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PaperComponent from '../components/Paper/PaperComponent';
import { t } from 'i18next';
import { ArrowIndicator } from '../components/Arrow/indicator';
import OffersDisplay from '../components/OffersDisplay/OffersDisplay';
import Button3 from '../components/Button/Button3';

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

function Description(props) {
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

function PromotionalMsg() {
    const theme = useTheme();

    return (
        <Box sx={{
            padding: theme.spacing(5),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing(2.5),
        }}>
            <Typography variant="h4">{t('page__games-promotional-msg--title')}</Typography>

            <Box sx={{
                maxWidth: `min(${theme.spacing(65)}, 100vw, 100%)`,
                textAlign: 'center',
            }}>
                {t('page__games-promotional-msg--text').split('\n').map((item, key) => (
                    <Typography variant="body1" key={key}>
                        {item}
                    </Typography>
                ))}
            </Box>

            <Button3 variant="contained" color="primary">Coming Soon !</Button3>
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
    const description = [
        {
            title: "Minecraft Standard",
            imageSrc: "https://shacknews-www.s3.amazonaws.com/assets/editorial/2023/04/minecraft-legends-golem.jpg",
            imageAlt: "Minecraft Standard",
            text: t('page__games-description-standard'),
        },
        {
            title: "Minecraft Advanced",
            imageSrc: "https://shacknews-www.s3.amazonaws.com/assets/editorial/2023/04/minecraft-legends-sunset.jpg",
            imageAlt: "Minecraft Advanced",
            text: t('page__games-description-advanced'),
        },
        {
            title: "Minecraft Advanced Plus",
            imageSrc: "https://shacknews-www.s3.amazonaws.com/assets/editorial/2023/04/minecraft-legends-piglins.jpg",
            imageAlt: "Minecraft Advanced Plus",
            text: t('page__games-description-advanced-plus'),
        },
    ]

    return (
        <Box>
            <OffersDisplay offers={offers} pageTitle={"page__games-group--minecraft"} />
            <ArrowIndicator />
            <PromotionalMsg />
            <Description elements={description} />
            <Specs />
        </Box>
    )
}