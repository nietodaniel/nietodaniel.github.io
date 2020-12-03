import React from 'react';
import { withTranslation } from 'react-i18next';

const story = ({t}) => { 
  return (
    <div>
        story works!
    </div>
  )
}

export default withTranslation(['story'])(story);