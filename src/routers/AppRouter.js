import React from 'react';
import PageFrame from './PageFrame';
import GetLocaleAndPath from '../components/modules/GetLocaleAndPath';
import { useLocation,useHistory } from 'react-router-dom'

const AppRouter = ({i18n}) => {

  const history = useHistory();
  const location = useLocation();

  const mainT = (word) =>i18n.t('main:' + word);
  const t = (word) => i18n.t(word);

  const {locale,path} = GetLocaleAndPath(i18n,location.pathname)
  console.log("{locale,path}")
  console.log(locale,path)

    return (
      <div id="main-container">
          <PageFrame
            i18n={i18n} path={path} mainT={mainT} t={t} locale={locale}
          />
      </div>
    );
}

export default AppRouter;
