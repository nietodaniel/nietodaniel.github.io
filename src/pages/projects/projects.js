import React from 'react';
import { withTranslation } from 'react-i18next';

const projects = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['projects'])(projects);