import React from 'react';
import { withTranslation } from 'react-i18next';

const softwareFree = ({t}) => { 
  return (
    <div>
        softwareFree works!
    </div>
  )
}

export default withTranslation(['softwareFree'])(softwareFree);