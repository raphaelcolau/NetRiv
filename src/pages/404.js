import { Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

export default function Page404() {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                width: '100vw',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img 
                src="/images/web-development.svg"
                alt="Coming Soon"
                style={{
                    maxWidth: '100vw',
                }}
            />
            <Typography variant="h3"><span style={{fontWeight: 700}}>404 </span>{t('404')}</Typography>
        </Box>
    )
}