import React from 'react';
import { withTranslation } from 'react-i18next';

const repositories = ({t}) => { 
  return (
    <div>
        repositories works!
    </div>
  )
}

export default withTranslation(['repositories'])(repositories);