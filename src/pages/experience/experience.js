import React from 'react';
import SideVerticalPanel from '../../components/panels/SideVerticalPanel';
import Experience from '../../pageparts/cv/Experience';
import { withTranslation } from 'react-i18next';
import TX from '../../localization/TX';
import ContactSnippet from '../../pageparts/contact/ContactSnippet';

const experience = ({t,screenType }) => { 
  const tCV = (word) => TX(t,word,"cv")
  const tMain = (word) => TX(t,word,"main")

  const buttonClassName = "btn normaltextsize AppbackgroundcolorB menubutton btnWithColor btn-outline-dark pt-1 pb-1 pl-4 pr-4"
  const rightContent = ContactSnippet(screenType,tCV,tMain,buttonClassName)

  const leftContent = <>
    {Experience(tCV)}
  </>

  return (
    <div className="normaltextsize">
        {SideVerticalPanel (screenType,leftContent,rightContent,true)}
    </div>
  )
}

export default withTranslation(['experience'])(experience);