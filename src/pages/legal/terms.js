import React from 'react';
import { withTranslation } from 'react-i18next';

const terms = ({t}) => { 
  return (
    <div>
        terms works!
    </div>
  )
}

export default withTranslation(['terms'])(terms);