


import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './Routes';
import { AppThemeProvider } from './Shared/Contexts/ThemeContext';






function App() {
  return (
  
  
  <AppThemeProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AppThemeProvider>

  );
}

export default App;
