import React from 'react';
import NormalPanel from '../../components/panels/NormalPanel';
import NotFoundPP from '../../pageparts/structure/NotFoundPP';
import { withTranslation } from 'react-i18next';
import TX from '../../localization/TX';

const notfound = ({t,screenType }) => { 
  const tNF = (word) => TX(t,word,"notfound")

  const leftContent = <>
    {NotFoundPP(tNF)}
  </>

  return (
    <div className="normaltextsize mt-5 text-center">
        {NormalPanel (screenType,leftContent)}
    </div>
  )
}

export default withTranslation()(notfound);
