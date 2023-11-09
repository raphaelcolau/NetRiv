import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './assets/theme';
import { ResponsiveAppBar } from './components/AppBar/AppBar';
import PageHome from './pages/home';
import PageGames from './pages/games';
import { I18nextProvider } from 'react-i18next';
import i18n from './assets/i18n.js';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ResponsiveFooter } from './components/Footer/footer';
import PageVPS from './pages/vps';
import PageSOON from './pages/soon';
import Page404 from './pages/404';
import PageLegal from './pages/legal';
import PageTOS from './pages/tos';
import PagePrivacy from './pages/privacy';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Placeholder() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>Coming soon...</h1>
    </div>
  )
}

root.render(
  <React.StrictMode>
    { new Date() < new Date('2023-11-15T12:00:00') ?
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>

          <ResponsiveAppBar />

          <CssBaseline />

          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/games" element={<PageGames />} />
            <Route path="/vps" element={<PageVPS />} />
            <Route path="/web" element={<PageSOON />} />
            <Route path="/dedicated" element={<PageSOON />} />
            <Route path="/legal" element={<PageLegal />} />
            <Route path="/legal" element={<PageSOON />} />
            <Route path="/terms-of-service" element={<PageTOS />} />
            <Route path="/privacy-policy" element={<PagePrivacy />} />
            <Route path="*" element={<Page404 />} />
          </Routes>

          <ResponsiveFooter />

        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
    : <Placeholder />}
  </React.StrictMode>
);

