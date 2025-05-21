import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter} from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7ccfd3',
        },
    },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
         <BrowserRouter basename="/anc-module/">
            <App />
         </BrowserRouter>
      </ThemeProvider>
  </StrictMode>,
)
