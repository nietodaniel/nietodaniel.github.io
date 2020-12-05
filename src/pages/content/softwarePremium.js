import React from 'react';
import { withTranslation } from 'react-i18next';

const softwarePremium = ({t}) => { 
  return (
    <div>
        softwarePremium works!
    </div>
  )
}

export default withTranslation(['softwarePremium'])(softwarePremium);