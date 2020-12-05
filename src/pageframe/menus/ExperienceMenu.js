import React from 'react';
import DropdownNavLink from '../../components/menus/DropdownNavLink';
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';

const ExperienceMenu = (mainT,menuClassName,locale) => {

    const buttonText = mainT("experience");
    const buttonClassName = "btn btn-sm dropdown-toggle menubutton btnWithColor btn-outline-light pt-0 pb-0 dropdown-toggle btn btn-primary";
    const buttonTextClassName = "small";
    const contentClassName = "nicedarkbluebackground dropdown-menu";
    const NavClassName = "small dropdown-item-hover";
    const linkTextClassName="small";

    const content = <>
      <DropdownNavLink  route={"/workprofile"} name={mainT("workprofile")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
      <hr className="mt-1 mb-1 m-0 p-0" style={{borderColor:'white'}} />
      <DropdownNavLink  route={"/experience"} name={mainT("experience")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
      <DropdownNavLink  route={"/education"} name={mainT("education")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
      <hr className="mt-1 mb-1 m-0 p-0" style={{borderColor:'white'}} />
      <DropdownNavLink  route={"/story"} name={mainT("mystory")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
    </>

    return(
      <MainDropDownMenu 
      buttonText={buttonText}
      content={content}
      menuClassName={menuClassName}
      buttonClassName={buttonClassName}
      contentClassName={contentClassName}
      buttonTextClassName={buttonTextClassName}
       />
    )
}

export default ExperienceMenu;
