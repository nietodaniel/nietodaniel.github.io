import React from 'react';
import { withTranslation } from 'react-i18next';

const story = ({t,screencontext:{ screenType }}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['story'])(story);