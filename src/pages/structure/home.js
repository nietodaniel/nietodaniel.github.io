import React from 'react';
import { withTranslation } from 'react-i18next';
import SideVerticalPanel from '../../components/panels/SideVerticalPanel';
import ProfilePic from '../../pageparts/cv/ProfilePic';
import MyInfo from '../../pageparts/cv/MyInfo';
import Summary from '../../pageparts/cv/Summary';
import LinkWithInfo from '../../components/buttons/LinkWithInfo'


const home = ({t,screencontext:{ screenType }}) => { 

  let LeftPanel = ""
  if (screenType === "normal" ) {
    LeftPanel = <>
        <div className="col-6 text-center">
          {ProfilePic("","35%")}
          {MyInfo(t)}
        </div>
        <div className="col-6">
          {Summary(t)}
        </div>
      </>
  }else{
    LeftPanel = <>
        <div className="col-12 text-center">
          {ProfilePic("","35%")}
          {MyInfo(t)}
        </div>
        <div className="mt-2 col-12">
          {Summary(t)}
        </div>
      </>
  }

  const leftContent = <div className="container-fluid m-0 p-0">
    <div className="row">
    {LeftPanel}
    </div>
  </div>


  const btnClass = ""
  const locale = document.documentElement.lang
  const btnLink = locale + "/cv"
  const buttonContent = <span className="small p-1">{"asd"}</span>
  const buttonExplore = LinkWithInfo(btnClass+" btn btn-lg pt-0 pb-0 btn btn-primary",buttonContent,t("viewcv"),"span",btnLink) 
  const rightContent = buttonExplore




  return (
    <div className="normaltextsize">
        {SideVerticalPanel (screenType,leftContent,rightContent)}
    </div>
  )
}

export default withTranslation(['cv'])(home);