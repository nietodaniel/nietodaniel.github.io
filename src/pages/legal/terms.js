import React from 'react';
import NormalPanel from '../../components/panels/NormalPanel';
import TermsPP from '../../pageparts/legal/TermsPP';
import { withTranslation } from 'react-i18next';

const terms = ({t,screenType }) => { 

  const leftContent = <>
    {TermsPP(t)}
  </>

  return (
    <div className="normaltextsize mt-5">
        {NormalPanel (screenType,leftContent)}
    </div>
  )
}

export default withTranslation(['terms'])(terms);