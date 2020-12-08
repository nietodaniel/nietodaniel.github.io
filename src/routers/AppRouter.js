import React from 'react';
import PageFrame from './PageFrame';
import GetLocaleAndPath from '../components/modules/GetLocaleAndPath';
import { useLocation } from 'react-router-dom'

const AppRouter = ({i18n}) => {

  const location = useLocation();

  const {locale,path,faultyLocale} = GetLocaleAndPath(i18n,location.pathname)

    return (
      <div id="main-container">
          <PageFrame
            i18n={i18n} path={path} faultyLocale={faultyLocale} locale={locale}
          />
      </div>
    );
}

export default AppRouter;
