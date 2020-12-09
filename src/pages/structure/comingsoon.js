import React from 'react';
import NormalPanel from '../../components/panels/NormalPanel';
import ComingSoonPP from '../../pageparts/structure/ComingSoonPP';
import { withTranslation } from 'react-i18next';
import TX from '../../localization/TX';
//import ContactSnippet from '../../pageparts/contact/ContactSnippet';

const comingsoon = ({t,screenType }) => { 
  const tNF = (word) => TX(t,word,"main")

  const leftContent = <>
    {ComingSoonPP(tNF)}
  </>

  return (
    <div className="normaltextsize mt-5 text-center">
        {NormalPanel (screenType,leftContent)}
    </div>
  )
}

export default withTranslation()(comingsoon);
