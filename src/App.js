import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './App.css';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {

    const { i18n } = this.props;
    return (
      <AppRouter i18n={i18n} />
    );
  }
}

export default withTranslation('translations')(App);
