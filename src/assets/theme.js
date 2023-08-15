import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#394266",
            contrastText: "#ffffff",
            container: '#dce1ff',
            contrastContainer: '#001551',
        },
        secondary: {
            main: "#595d72",
            contrastText: "#ffffff",
        },
        tertiary: {
            main: "#dce1ff",
        },
        background: {
            default: "#fefbff",
            contrastText: "#1b1b1f",
        },
        surface: {
            main: "#fefbff",
            contrastText: "#1b1b1f",
        },
        surfaceVariant: {
            main: "#e2e1ec",
            contrastText: "#45464f",
        },
        outline: {
            main: "#767680",
        }


    },
});