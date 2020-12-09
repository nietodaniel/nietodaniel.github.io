import React from 'react'
import LinkWithInfo from '../../components/buttons/LinkWithInfo'
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';
import ContactMenuOptions from '../../pageframe/menus/ContactMenuOptions';

const ContactSnippet = (screenType,tCV,tMain,buttonClassName) => {

    const cvLink = LinkWithInfo(buttonClassName,<span className="small p-1">{tMain("viewcv")}</span>,tCV("viewcv"),"span","/cv") 
      
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
    buttonClassName = buttonClassName + " small"
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
        buttonClassName = buttonClassName + " small"
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

    return rightContent


}

export default ContactSnippet
