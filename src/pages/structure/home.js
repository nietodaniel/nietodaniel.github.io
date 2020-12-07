import React from 'react';
import { withTranslation } from 'react-i18next';
import SideVerticalPanel from '../../components/panels/SideVerticalPanel';
import ProfilePic from '../../pageparts/cv/ProfilePic';
import MyInfo from '../../pageparts/cv/MyInfo';
import Summary from '../../pageparts/cv/Summary';


const home = ({t,screencontext:{ orientation, screenSize }}) => { 

  const leftContent = <div className="container-fluid m-0 p-0">
    <div className="col-12 text-center">
      {ProfilePic("","35%")}
    </div>
    <div className="col-12 small">
      {MyInfo(t)}
    </div>
    <div className="mt-2 col-12">
      {Summary(t)}
    </div>
  </div>
  const rightContent = ""




  return (
    <div className="normaltextsize container-fluid m-0 p-0 pl-1 pr-1">
        {SideVerticalPanel (orientation, screenSize,leftContent,rightContent)}
    </div>
  )
}

export default withTranslation(['cv'])(home);