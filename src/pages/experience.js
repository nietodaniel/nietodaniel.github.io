import React from 'react';
import { withTranslation } from 'react-i18next';

const experience = ({t}) => { 
  return (
    <div>
        experience works!
    </div>
  )
}

export default withTranslation(['experience'])(experience);