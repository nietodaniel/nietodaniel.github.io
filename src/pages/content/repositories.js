import React from 'react';
import SideVerticalPanel from '../../components/panels/SideVerticalPanel';
import Repositories from '../../pageparts/cv/Repositories';
import { withTranslation } from 'react-i18next';
import TX from '../../localization/TX';
import ContactSnippet from '../../pageparts/contact/ContactSnippet';

const repositories = ({t,screenType }) => { 
  const tCV = (word) => TX(t,word,"cv")
  const tMain = (word) => TX(t,word,"main")

  const buttonClassName = "btn normaltextsize AppbackgroundcolorB menubutton btnWithColor btn-outline-dark p-0 m-auto d-table-cell"
  const rightContent = ContactSnippet(screenType,tCV,tMain,buttonClassName)

  const leftContent = <>
    {Repositories(tCV)}
  </>

  return (
    <div className="normaltextsize">
        {SideVerticalPanel (screenType,leftContent,rightContent,false)}
    </div>
  )
}

export default withTranslation(['repositories'])(repositories);