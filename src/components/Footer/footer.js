import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../Logo/logo';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { managerLink } from '../../utils/managerLink';


function ListColumn({ title, items }) {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: theme.spacing(0.7),
            color: theme.palette.primary.main,
        }}>

            <Typography variant='h6'>{t("footer__text-" + title)}:</Typography>

            {items.map((item, index) => (
                <Box key={index} sx={{
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: theme.palette.primary.main,
                    marginLeft: theme.spacing(1.5),
                }}>
                    {item.external ? 
                    <a href={managerLink(item.link, 'full')} style={{textDecoration: 'none', color: theme.palette.primary.main}}>
                        <Typography variant='subtitle1' sx={{
                            fontWeight: 500,
                            textAlign: 'start',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}>
                            • {t("footer__text-" + item.name)}
                        </Typography>
                    </a>
                    :
                    <Link 
                        to={item.link}
                        style={{textDecoration: 'none', color: theme.palette.primary.main}}
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        <Typography variant='subtitle1' sx={{
                            fontWeight: 500,
                            textAlign: 'start',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}>
                            • {t("footer__text-" + item.name)}
                        </Typography>
                    </Link>
                    }
                </Box>
            ))}
        </Box>
    )
}

export function ResponsiveFooter() {
    const theme = useTheme();

    const DiscordIcon = () => (
        <Box sx={{
            width: '1.5rem',
            height: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.primary.main,
            marginRight: theme.spacing(1),
            '& svg': {
                fill: theme.palette.primary.main,
            },
            '&:hover': {
                cursor: 'pointer',
            },
        }}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
        </Box>
    )

    const social = [
        {name: 'Twitter', icon: <TwitterIcon sx={{color: theme.palette.primary.main, marginRight: theme.spacing(1)}} />, link: 'https://twitter.com/NetrivHeberg'},
        {name: 'Discord', icon: <DiscordIcon sx={{color: theme.palette.primary.main, marginRight: theme.spacing(1)}} />, link: 'https://discord.gg/shevUrAETC'},
        {name: 'Youtube', icon: <YouTubeIcon sx={{color: theme.palette.primary.main, marginRight: theme.spacing(1)}} />, link: 'https://www.youtube.com/channel/UCOhAbfUWMM3Hv0mrhYJPWKA'},
    ]

    return (
        <Grid 
            container
            spacing={2}
            sx={{
                width: '100vw',
                backgroundColor: theme.palette.tertiary.surface,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingTop: theme.spacing(4),
                paddingBottom: theme.spacing(4),
                overflowX: 'hidden',
                [theme.breakpoints.down('mobile_l')]: {

                },
            }}
        >

            <Grid item lg={12}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    gap: theme.spacing(2),
                }}>
                    <Logo />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: theme.spacing(0.5),
                        marginLeft: theme.spacing(1),
                    }}>
                        {social.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noreferrer" style={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: theme.palette.primary.main,
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }} >
                                {item.icon}
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </Box>
                </Box>
            </Grid>

            <Grid item md={12}>
                <ListColumn title='netriv' items={[
                    {name: 'news',                  link: 'index.php/announcements', external: true},
                    {name: 'about',                 link: 'about',              external: false},
                    {name: 'legal',                 link: 'legal',              external: false},
                    {name: 'legal--tos',            link: 'terms-of-service',   external: false},
                    {name: 'legal--privacy',        link: 'privacy-policy',     external: false},
                ]}/>
            </Grid> 

            <Grid item md={12}>
                <ListColumn title='products' items={[
                    {name: 'products--vps',         link: 'vps',                external: false},
                    {name: 'products--games',       link: 'games',              external: false},
                    {name: 'products--web',         link: 'web',                external: false},
                    {name: 'products--dedicated',   link: 'dedicated',          external: false},
                    {name: 'products--mail',        link: 'mail',               external: false},
                ]}/>
            </Grid> 

            <Grid item md={12}>
                <ListColumn title='support' items={[
                    {name: 'support--contact',      link: 'contact.php',        external: true},
                    {name: 'support--faq',          link: 'faq',                external: false},
                    {name: 'support--status',       link: 'serverstatus.php',   external: true},
                    {name: 'support--helpcenter',   link: 'index.php/knowledgebase', external: true},
                    {name: 'support--ticket',       link: 'supporttickets.php', external: true},
                ]}/>
            </Grid> 

        </Grid>
    )
}