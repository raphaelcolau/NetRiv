import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useEffect, useState } from 'react';

export function ArrowIndicator() {
    const theme = useTheme();
    const [viewportY, setViewportY] = useState(0);
    const maxViewportY = 400;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setViewportY(window.scrollY);
        });

    }, [viewportY]);

    return (
        <Box 
            sx={{
                position: 'absolute',
                bottom: '2%',
                right: '50%',
                transform: 'translateX(50%)',
                cursor: 'pointer',
                [theme.breakpoints.down('laptop_l')]: {
                    display: 'none',
                },
                '@media (min-resolution: 120dpi)': {
                    display: 'none',
                }
            }}
            onClick={() => {
                const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                window.scrollTo({
                    top: viewportHeight,
                    behavior: 'smooth',
                });
            }}
        >
            {viewportY > maxViewportY ? null :
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0, 10, 0, 0, 0, 0, 0, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    >
                        <ArrowBackIosRoundedIcon
                            sx={{
                                width: theme.spacing(10),
                                height: theme.spacing(10),
                                marginBottom: theme.spacing(2),
                                color: theme.palette.outline.main,
                                transform: 'rotate(-90deg)',
                            }}
                        />
                    </motion.div>
                </div>
            }
        </Box>
    )
}