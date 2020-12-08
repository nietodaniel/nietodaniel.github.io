import React from 'react';
import { withTranslation } from 'react-i18next';

const dataSciencePackages = ({t,screenType }) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['dataSciencePackages'])(dataSciencePackages);