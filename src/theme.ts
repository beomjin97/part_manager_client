import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
    palette : {
        mode: 'light',
        primary: { main: 'rgb(5, 30, 52)' },
        background: { default: 'rgb(5, 30, 52)' },
        text: {primary: '#000'}
    }
})