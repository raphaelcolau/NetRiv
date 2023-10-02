import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export default function PageLegal() {
    const theme = useTheme();
    const {t} = useTranslation();

    const elements = [{name: 'intro'}]

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: theme.spacing(20),
                marginRight: theme.spacing(20),
                marginTop: theme.spacing(15),
                marginBottom: theme.spacing(15),
            }}
        >
            <Typography variant="h5">{t('page__legal--title')}:</Typography>
            <Divider sx={{marginBottom: theme.spacing(3)}} />
            {elements.map((element, index) => {
                const texts = t('page__legal--content-'+element.name,  {returnObjects: true}).split('\n');
                console.log(texts)

                return (
                    <Box>
                        <Typography variant="h6" key={index}>{t('page__legal--content-'+element.name+'-title')}</Typography>
                        {texts.map((text, index) => (
                            <Typography variant="body1" key={index}>{text}</Typography>
                        ))}
                    </Box>
                )
            })}
        </Box>
    )
}