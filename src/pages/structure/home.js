import React from 'react';
import { withTranslation } from 'react-i18next';

const home = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['home'])(home);