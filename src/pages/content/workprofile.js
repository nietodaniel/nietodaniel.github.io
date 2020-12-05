import React from 'react';
import { withTranslation } from 'react-i18next';

const workprofile = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['workprofile'])(workprofile);