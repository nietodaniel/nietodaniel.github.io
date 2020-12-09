import React from 'react';
import { withTranslation } from 'react-i18next';
import NormalPanel from '../../components/panels/NormalPanel';

import Education from '../../pageparts/cv/Education';
import MyInfo from '../../pageparts/cv/MyInfo';
import References from '../../pageparts/cv/References';
import Skills from '../../pageparts/cv/Skills';
import Summary from '../../pageparts/cv/Summary';
import Research from '../../pageparts/cv/Research';
import Experience from '../../pageparts/cv/Experience';
import Repositories from '../../pageparts/cv/Repositories';
import Awards from '../../pageparts/cv/Awards';
import TX from '../../localization/TX';
import ContactSnippet from '../../pageparts/contact/ContactSnippet';

const cv = ({t,screenType }) => { 

  const tCV = (word) => TX(t,word,"cv")
  const tMain = (word) => TX(t,word,"main")

  const full = <>
    {MyInfo(tCV)}
    <br />
    {Summary(tCV)}
    <span>{Skills(tCV)}</span>
    <span>{Education(tCV)}</span>
    <span>{Experience(tCV)}</span>
    <span>{Repositories(tCV)}</span>
    <span>{Research(tCV)}</span>
    <span>{Awards(tCV)}</span>
    <span>{References(tCV)}</span>
  </>

  const buttonClassName = "btn normaltextsize AppbackgroundcolorB menubutton btnWithColor btn-outline-dark p-0 m-auto d-table-cell"
  const conctactSection = ContactSnippet("miniV",tCV,tMain,buttonClassName,true,true)

  return (
    <div className="normaltextsize container-fluid mb-5">
      <span className="col-12 small">
          {NormalPanel("screenType",full)}
      </span>
      <span className="col-12 small">
          {conctactSection}
      </span>
    </div>
  )
}


export default withTranslation()(cv);