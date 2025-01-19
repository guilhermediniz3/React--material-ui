


import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './Routes';

import { Light } from '@mui/icons-material';
import { LightTheme } from './Shared/Themes';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    // chamada da pasta Theme com as configurações do Tema e um recurso do uimaterial
   <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
