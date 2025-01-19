


import { createContext, useCallback, useContext, useMemo, useState } from "react";   
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme, PurpleTheme} from "../Themes";  // Importe o PurpleTheme


interface IThemeContextData {
    themeName: 'light' | 'dark' | 'purple';
    toggleTheme: () => void; // Função para alternar o tema
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<any> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark' | 'purple'>('light');

    // Função para alternar entre os temas
    const toggleTheme = useCallback(() => {
        setThemeName((oldThemeName) => {
            if (oldThemeName === 'light') return 'dark';
            if (oldThemeName === 'dark') return 'purple';
            return 'light';
        });
    }, []);

    // Definir o tema atual baseado no estado
    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;
        if (themeName === 'dark') return DarkTheme;
        return PurpleTheme; // Use o tema roxo
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>   
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}



























// A função createContext é usada para criar um contexto no React.
// O contexto permite compartilhar dados entre componentes sem precisar passar props manualmente 
// em cada nível da árvore de componentes. Isso é útil quando dados precisam ser acessados em vários 
// componentes ao longo da árvore, como temas, preferências de usuário ou dados de autenticação.

// Quando você chama createContext(), ele retorna um objeto de contexto com duas propriedades principais:
// - Provider: Componente usado para fornecer o valor do contexto aos filhos.
// - Consumer: Componente usado para acessar o valor do contexto em um nível mais profundo da árvore de componentes.
//createContext(): Cria o contexto, que pode compartilhar dados entre componentes.
//Provider: Fornece o valor do contexto aos componentes filhos.
//useContext(): Permite acessar o valor do contexto diretamente nos componentes.