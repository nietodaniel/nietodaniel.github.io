import React from 'react';
import NormalPanel from '../../components/panels/NormalPanel';
import CookiesPP from '../../pageparts/legal/CookiesPP';
import { withTranslation } from 'react-i18next';

const cookies = ({t,screenType }) => { 

  const leftContent = <>
    {CookiesPP(t)}
  </>

  return (
    <div className="normaltextsize mt-5">
        {NormalPanel (screenType,leftContent)}
    </div>
  )
}

export default withTranslation(['cookies'])(cookies);