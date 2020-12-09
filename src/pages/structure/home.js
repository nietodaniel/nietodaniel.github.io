import React from 'react';
import SideVerticalPanel from '../../components/panels/SideVerticalPanel';
import ProfilePic from '../../pageparts/cv/ProfilePic';
import MyInfo from '../../pageparts/cv/MyInfo';
import Summary from '../../pageparts/cv/Summary';
import LinkWithInfo from '../../components/buttons/LinkWithInfo'
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';
import ContactMenuOptions from '../../pageframe/menus/ContactMenuOptions';
import TX from '../../localization/TX';
import { withTranslation } from 'react-i18next';

const home = ({t,screenType }) => { 
  const tCV = (word) => TX(t,word,"cv")
  const tHome = (word) => TX(t,word,"home")
  const tMain = (word) => TX(t,word,"main")

  let leftContent = ""
  let buttonClassName = "btn normaltextsize AppbackgroundcolorB menubutton btnWithColor btn-outline-dark pt-1 pb-1 pl-4 pr-4"
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
    buttonClassName = buttonClassName + " small"
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
    buttonClassName = buttonClassName + " small"
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

  const cvLink = LinkWithInfo(buttonClassName,<span className="small p-1">{tHome("viewcv")}</span>,tCV("viewcv"),"span","/cv") 
      

  const menuClassName = "allowmouse nav-item dropdown m-auto pr-2";
  const buttonTextClassName = "small p-1";
  const contentClassName = "dropdown-menu"


  const ContactMe = <>
    <MainDropDownMenu 
      buttonText={tMain("contactme")}
      content={ContactMenuOptions(tMain)}
      menuClassName={menuClassName}
      buttonClassName={buttonClassName + " dropdown-toggle"}
      contentClassName={contentClassName}
      buttonTextClassName={buttonTextClassName}
    />
  </>
  
  let rightPanel = ""

  if (screenType === "normal" ) {
    rightPanel = <div className="row w-100 m-0 p-0 h-100"><div className="col-12 text-center table">
    <span  className="align-bottom vertical-adjustable">
      {ContactMe}
    </span>
  </div>
  <div className="col-12 text-center table">
    <span className="align-top">
      {cvLink}
    </span>
  </div></div>
  }else if (screenType === "miniV" ) {
    rightPanel = <div className="row w-100 m-0 p-0 mb-5">
      <div className="col-6 text-center">
    <span  className="align-middle">
      {cvLink}
    </span>
  </div>
  <div className="col-6 text-center">
    <span className="align-middle">
    {ContactMe}
    </span>
  </div>
  </div>
  } else {
    rightPanel = <div className="row w-100 m-0 p-0 mb-5">
    <div className="offset-1 col-5 text-center">
  <span  className="align-middle">
    {cvLink}
  </span>
</div>
<div className="col-5 text-center">
  <span className="align-middle">
    {ContactMe}
  </span>
</div>
</div>
  }




  const rightContent = <div className="container-fluid m-0 p-0 mt-1 vertical-center h-100">
      {rightPanel}
  </div>

  return (
    <div className="normaltextsize">
        {SideVerticalPanel (screenType,leftContent,rightContent)}
    </div>
  )
}

export default withTranslation()(home);