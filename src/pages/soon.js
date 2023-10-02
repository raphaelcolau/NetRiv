import { Box, Typography } from "@mui/material";

export default function PageSOON() {
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
            <Typography variant="h3">Coming Soon</Typography>
        </Box>
    )
}