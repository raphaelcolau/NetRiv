import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { t } from 'i18next';
import Button3 from '../Button/Button3';

export default function PromotionalMsg() {
    const theme = useTheme();

    return (
        <Box sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={{
                padding: theme.spacing(5),
                paddingBottom: theme.spacing(10),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: theme.spacing(2.5),
                [theme.breakpoints.down('mobile_l')]: {
                    width: `min(${theme.spacing(45)}, 100vw, 100%)`,
                }
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
        </Box>
    )
}