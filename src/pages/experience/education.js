import React from 'react';
import { withTranslation } from 'react-i18next';

const education = ({t}) => { 
  return (
    <div>
        education works!
    </div>
  )
}

export default withTranslation(['education'])(education);