import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/index.scss';
import Register from './components/register';
import Access from './components/access';
import Main from './components/main';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink, orange, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500]
    },
    secondary: {
      main: orange[600]
    },
    dark: {
      main: grey[900],
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Roboto Slab, serif',
      fontSize: '3rem',
      fontWeight: 'bold'
    },
    h3: {
      fontFamily: 'Roboto Slab, serif',
      fontSize: '1.875rem',
      fontWeight: 'bold'
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 'bold'
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 'bold'
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="access" element={<Access />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </ThemeProvider>
  </React.StrictMode >
);