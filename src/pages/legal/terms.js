import React from 'react';
import { withTranslation } from 'react-i18next';

const terms = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['terms'])(terms);