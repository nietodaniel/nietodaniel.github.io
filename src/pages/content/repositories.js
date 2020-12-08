import React from 'react';
import { withTranslation } from 'react-i18next';

const repositories = ({t,screenType }) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['repositories'])(repositories);