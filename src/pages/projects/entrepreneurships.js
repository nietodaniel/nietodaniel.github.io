import React from 'react';
import { withTranslation } from 'react-i18next';

const entrepreneurships = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['entrepreneurships'])(entrepreneurships);