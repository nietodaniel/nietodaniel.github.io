import React from 'react';
import { withTranslation } from 'react-i18next';

const apps = ({t}) => { 
  return (
    <div>
        apps works!
    </div>
  )
}

export default withTranslation(['apps'])(apps);