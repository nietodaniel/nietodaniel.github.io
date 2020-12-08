import React from 'react';
import { withTranslation } from 'react-i18next';

const education = ({t,screenType }) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['education'])(education);