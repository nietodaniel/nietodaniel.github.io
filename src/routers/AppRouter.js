import React from 'react';
import PageFrame from './PageFrame';
import GetLocaleAndPath from '../components/modules/GetLocaleAndPath';

const AppRouter = ({i18n}) => {

    const location = window.location
    const {locale,path,faultyLocale} = GetLocaleAndPath(i18n,location)

    return (
      <div id="main-container">
          <PageFrame
            i18n={i18n} locale={locale} faultyLocale={faultyLocale}
          />
      </div>
    );
}

export default AppRouter;
