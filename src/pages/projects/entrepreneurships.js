import React from 'react';
import { withTranslation } from 'react-i18next';

const entrepreneurships = ({t,screencontext:{ orientation, screenSize }}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['entrepreneurships'])(entrepreneurships);