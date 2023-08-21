import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './assets/theme';
import { ResponsiveAppBar } from './components/AppBar/AppBar';
import PageHome from './pages/home';
import { I18nextProvider } from 'react-i18next';
import i18n from './assets/i18n.js';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: '/',      element: <PageHome /> },
  { path: '/login', element: <div> Login </div>   },
]);


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
      <ResponsiveAppBar />

      <CssBaseline />

      <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

