import React from 'react';
import NormalPanel from '../../components/panels/NormalPanel';
import PrivacyPP from '../../pageparts/legal/PrivacyPP';
import { withTranslation } from 'react-i18next';

const privacy = ({t,screenType }) => { 

  const leftContent = <>
    {PrivacyPP(t)}
  </>

  return (
    <div className="normaltextsize mt-5">
        {NormalPanel (screenType,leftContent)}
    </div>
  )
}

export default withTranslation(['privacy'])(privacy);