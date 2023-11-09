import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PaperComponent from '../components/Paper/PaperComponent';
import { t } from 'i18next';
import { ArrowIndicator } from '../components/Arrow/indicator';
import OffersDisplay from '../components/OffersDisplay/OffersDisplay';
import ContentDescription from '../components/ContentDescription/ContentDescription';
import PromotionalMsg from '../components/PromotionalMsg/PromotionalMsg';

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
            <ContentDescription elements={description} />
            <Specs />
        </Box>
    )
}