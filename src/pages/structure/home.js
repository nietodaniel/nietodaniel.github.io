import React from 'react';
import SideVerticalPanel from '../../components/panels/SideVerticalPanel';
import ProfilePic from '../../pageparts/cv/ProfilePic';
import MyInfo from '../../pageparts/cv/MyInfo';
import Summary from '../../pageparts/cv/Summary';
import LinkWithInfo from '../../components/buttons/LinkWithInfo'
import ContactMenu from '../../pageframe/menus/ContactMenu';
import TX from '../../localization/TX';
import { withTranslation } from 'react-i18next';

const home = ({t,screenType }) => { 
  const tCV = (word) => TX(t,word,"cv")
  const tMain = (word) => TX(t,word,"main")

  let leftContent = ""
  if (screenType === "normal" ) {
    leftContent = <div className="container-fluid mt-5 m-0 p-0">
    <div className="row">
      <div className="offset-1 col-11 text-center">
        {ProfilePic("","30vh")}
        {MyInfo(tCV)}
      </div>
      <div className="mt-2 offset-1 col-11">
        {Summary(tCV)}
      </div>
    </div>
  </div>
  }else if (screenType === "miniV" ) {
    leftContent = <div className="container-fluid m-0 p-0">
    <div className="row m-0 p-0">
      <div className="col-12 text-center">
        {ProfilePic("","20vh")}
        {MyInfo(tCV)}
      </div>
      <div className="mt-1 col-12">
        {Summary(tCV)}
      </div>
    </div>
  </div>
  } else {
    leftContent = <div className="container-fluid m-0 p-0 mt-1">
      <div className="row">
        <div className="offset-1 col-6 text-center">
        {ProfilePic("","35vh")}
        {MyInfo(tCV)}
        </div>
        <div className="col-5">
          {Summary(tCV)}
        </div>
      </div>
    </div>
  }


  const btnClass = ""
  const locale = document.documentElement.lang
  const btnLink = locale + "/cv"
  const buttonContent = <span className="small p-1">{"asd"}</span>
  const buttonExplore = LinkWithInfo(btnClass+" btn btn-lg pt-0 pb-0 btn btn-primary",buttonContent,tCV("viewcv"),"span",btnLink) 
  
  const ContactMe = (
    <div className="small small col-2 text-center m-auto p-0">
      <span className="d-none d-sm-block">
        {ContactMenu(tMain, false)}
      </span>
      <span> </span>
    </div>
  );
  
  const rightContent = <>
  {ContactMe}
  {buttonExplore}
  </>

  return (
    <div className="normaltextsize">
        {SideVerticalPanel (screenType,leftContent,rightContent)}
    </div>
  )
}

export default withTranslation()(home);