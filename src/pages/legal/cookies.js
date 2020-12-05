import React from 'react';
import { withTranslation } from 'react-i18next';

const cookies = ({t}) => { 
  return (
    <div>
        cookies works!
    </div>
  )
}

export default withTranslation(['cookies'])(cookies);