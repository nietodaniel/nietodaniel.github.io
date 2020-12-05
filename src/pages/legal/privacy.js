import React from 'react';
import { withTranslation } from 'react-i18next';

const privacy = ({t}) => { 
  return (
    <div>
        privacy works!
    </div>
  )
}

export default withTranslation(['privacy'])(privacy);