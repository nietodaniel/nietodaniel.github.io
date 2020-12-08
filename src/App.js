import React from 'react';
import { withTranslation } from 'react-i18next';
import './App.css';
import AppRouter from './routers/AppRouter';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from "react-i18next";
import i18n from "./localization/i18n";
import { BrowserRouter as Router } from 'react-router-dom';


const App = () =>{
    const helmetContext = {};

    return (
      <I18nextProvider>
        <HelmetProvider context={helmetContext}>
          <Router>
            <AppRouter i18n={i18n} />
          </Router>
        </HelmetProvider>
      </I18nextProvider>
    );
}

export default withTranslation('translations')(App);