import React from 'react';
import DropdownNavLink from '../../components/menus/DropdownNavLink';
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';

const ProjectsMenu = (mainT,menuClassName,locale) => {

    const buttonText = mainT("projects");
    const buttonClassName = "btn btn-sm dropdown-toggle menubutton btnWithColor btn-outline-light pt-0 pb-0 dropdown-toggle btn btn-primary";
    const buttonTextClassName = "small";
    const contentClassName = "nicedarkbluebackground dropdown-menu";
    const NavClassName = "small dropdown-item-hover";
    const linkTextClassName="small";

    const content = <>
      <DropdownNavLink  route={"/projects"} name={mainT("projects")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
      <DropdownNavLink  route={"/entrepreneurships"} name={mainT("entrepreneurships")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} />  
      <DropdownNavLink  route={"/software/upcoming"} name={mainT("upcomingapps")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
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

export default ProjectsMenu;
