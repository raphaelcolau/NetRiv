import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './assets/theme';
import { ResponsiveAppBar } from './components/AppBar/AppBar';

import './assets/i18n.js';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: '/',      element: <div> Accueil </div> },
  { path: '/login', element: <div> Login </div>   },
]);


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <ResponsiveAppBar />

      <CssBaseline />

      <RouterProvider router={router} />

    </ThemeProvider>
  </React.StrictMode>
);

