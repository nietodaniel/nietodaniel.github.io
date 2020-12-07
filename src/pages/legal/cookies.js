import React from 'react';
import { withTranslation } from 'react-i18next';

const cookies = ({t,screencontext:{ orientation, screenSize }}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['cookies'])(cookies);