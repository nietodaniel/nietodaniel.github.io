import React from 'react';
import SideVerticalPanel from '../../components/panels/SideVerticalPanel';
import ProfilePic from '../../pageparts/cv/ProfilePic';
import MyInfo from '../../pageparts/cv/MyInfo';
import Summary from '../../pageparts/cv/Summary';
import TX from '../../localization/TX';
import ContactSnippet from '../../pageparts/contact/ContactSnippet';
import { withTranslation } from 'react-i18next';

const home = ({t,screenType }) => { 
  const tCV = (word) => TX(t,word,"cv")
  const tMain = (word) => TX(t,word,"main")

  let leftContent = ""
  if (screenType === "normal" ) {
    leftContent = <div className="container-fluid mt-3 m-0 p-0">
    <div className="row w-100 m-0 p-0">
      <div className="offset-1 col-11 text-center">
        {ProfilePic("","30vh")}
        <span class="small">{MyInfo(tCV)}</span>
      </div>
      <div className="mt-2 offset-1 col-11">
        {Summary(tCV)}
      </div>
    </div>
  </div>
  }else if (screenType === "miniV" ) {
    leftContent = <div className="container-fluid m-0 p-0">
    <div className="row w-100 m-0 p-0">
      <div className="col-12 text-center">
        {ProfilePic("","20vh")}
        <span class="small">{MyInfo(tCV)}</span>
      </div>
      <div className="mt-1 col-12">
        {Summary(tCV)}
      </div>
    </div>
  </div>
  } else {
    leftContent = <div className="container-fluid m-0 p-0 mt-1 vertical-center">
      <div className="row w-100 m-0 p-0">
        <div className="col-2 text-center vertical-center">
        {ProfilePic("","30vh")}
        </div>
        <div className="col-4 vertical-center">
          <span className="small">{MyInfo(tCV)}</span>
        </div>
        <div className="col-6 vertical-center">
          <span>{Summary(tCV)}</span>
        </div>
      </div>
    </div>
  }

  const buttonClassName = "btn normaltextsize AppbackgroundcolorB menubutton btnWithColor btn-outline-dark pt-1 pb-1 pl-4 pr-4"
  const rightContent = ContactSnippet(screenType,tCV,tMain,buttonClassName)







  return (
    <div className="normaltextsize">
        {SideVerticalPanel (screenType,leftContent,rightContent,false)}
    </div>
  )
}

export default withTranslation()(home);