import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export default function PageLegal() {
    const theme = useTheme();
    const {t} = useTranslation();

    const elements = [
        'info',
    ]

    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: theme.spacing(15),
                marginBottom: theme.spacing(15),
            }}
        >
            <Box sx={{
                maxWidth: '80vw',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant="h5">{t('page__legal--title')}:</Typography>
                <Divider sx={{marginBottom: theme.spacing(3)}} />
                {elements.map((element, index) => {
                    const texts = t('page__legal--content-'+element,  {returnObjects: true}).split('\n');
                    return (
                        <Box key={index} sx={{marginBottom: theme.spacing(2)}}>
                            {texts.map((text, index) => (
                                <Typography variant="body1" key={index}>{text}</Typography>
                            ))}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}