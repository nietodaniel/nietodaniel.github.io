import React from 'react';
import { withTranslation } from 'react-i18next';

const education = ({t,screencontext:{ screenType }}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['education'])(education);