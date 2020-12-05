import React from 'react';
import { withTranslation } from 'react-i18next';

const upcomingSoftware = ({t}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['upcomingSoftware'])(upcomingSoftware);