import React from 'react';
import { withTranslation } from 'react-i18next';

const services = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['services'])(services);