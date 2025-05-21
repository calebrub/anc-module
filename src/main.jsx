import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import {HashRouter} from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#68c7cb',
        },
    },
    typography: {
        fontFamily: '"Nunito Sans", sans-serif',
    },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
         <HashRouter>
            <App />
         </HashRouter>
      </ThemeProvider>
  </StrictMode>,
)
