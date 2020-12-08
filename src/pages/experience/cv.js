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

const cv = ({t,screencontext:{ screenType }}) => { 

  const full = <>
    {MyInfo(t)}
    <br />
    {Summary(t)}
    <span>{Skills(t)}</span>
    <span>{Education(t)}</span>
    <span>{Experience(t)}</span>
    <span>{Repositories(t)}</span>
    <span>{Research(t)}</span>
    <span>{Awards(t)}</span>
    <span>{References(t)}</span>
  </>

  return (
    <div className="normaltextsize container-fluid mb-5">
      <span className="col-12">
        <span className="small">
          {NormalPanel(screenType,full)}
        </span>
      </span>
    </div>
  )
}

export default withTranslation(['cv'])(cv);