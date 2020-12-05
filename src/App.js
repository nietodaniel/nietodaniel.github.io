import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './App.css';
import AppRouter from './routers/AppRouter';
import { HelmetProvider } from 'react-helmet-async';

class App extends Component {
  render() {
    const helmetContext = {};

    const { i18n } = this.props;

    return (
      <HelmetProvider context={helmetContext}>
        <AppRouter i18n={i18n} />
      </HelmetProvider>
    );
  }
}

export default withTranslation('translations')(App);