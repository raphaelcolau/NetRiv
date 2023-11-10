import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import Button3 from '../Button/Button3';

export default function PromotionalMsg2() {
    const theme = useTheme();

    return (
        <Box>
            <Grid container justifyContent='center' gap={3}>
                
                <Grid item xs={6} md={6}>
                    <Avatar
                        sx={{
                            borderRadius: theme.spacing(4),
                            width: theme.spacing(45),
                            height: theme.spacing(45),
                            [theme.breakpoints.down('mobile_l')]: {
                                width: `min(${theme.spacing(40)}, 90%)`,
                                height: `min(${theme.spacing(40)}, 90%)`,
                            },
                        }}
                        src='https://www.lebigdata.fr/wp-content/uploads/2017/04/data-center-definition.jpg'
                        alt='data center'
                    />
                </Grid>

                <Grid item xs={6} md={6} justifyContent='flex-start' sx={{
                    width: `min(${theme.spacing(45)}, 50%)`,
                    [theme.breakpoints.down('mobile_l')]: {
                        width: `min(${theme.spacing(40)}, 90%)`,
                    },
                }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {t('page__home-promotionalmsg2--title')}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {t('page__home-promotionalmsg2--text')}
                    </Typography>

                    <Link to='/vps'>
                        <Button3 color='primary' variant='contained' sx={{
                            float: 'right',
                            [theme.breakpoints.down('mobile_l')]: {
                                marginTop: theme.spacing(2),
                            },
                        }}>
                            {t('page__home-promotionalmsg2--button')}
                        </Button3>
                    </Link>
                </Grid>

            </Grid>
        </Box>
    )
}