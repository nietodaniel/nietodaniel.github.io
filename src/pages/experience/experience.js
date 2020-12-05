import React from 'react';
import { withTranslation } from 'react-i18next';

const experience = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['experience'])(experience);