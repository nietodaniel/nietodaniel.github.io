import React from 'react';
import { withTranslation } from 'react-i18next';

const contact = ({t}) => { 
  return (
    <div>
        contact works!
    </div>
  )
}

export default withTranslation(['contact'])(contact);