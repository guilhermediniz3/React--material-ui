import { createTheme } from '@mui/material';
import { cyan, yellow, purple } from '@mui/material/colors';

export const PurpleTheme = createTheme({

    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#2c003e',  // Cor personalizada para o fundo (roxo escuro)
            default: '#3e0056', // Cor personalizada para o fundo principal
        },
    },

});
