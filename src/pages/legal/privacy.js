import React from 'react';
import { withTranslation } from 'react-i18next';

const privacy = ({t,screencontext:{ orientation, screenSize }}) => { 
  return (
    <div>
        {t("componentworks")}
    </div>
  )
}

export default withTranslation(['privacy'])(privacy);