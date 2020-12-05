import React from 'react';
import DropdownNavLink from '../../components/menus/DropdownNavLink';
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';

const MyContentsMenu = (mainT,menuClassName,locale) => {

    const buttonText = mainT("products");
    const buttonClassName = "btn btn-sm dropdown-toggle menubutton btnWithColor btn-outline-light pt-0 pb-0 dropdown-toggle btn btn-primary";
    const buttonTextClassName = "small";
    const contentClassName = "nicedarkbluebackground dropdown-menu";
    const NavClassName = "small dropdown-item-hover";
    const linkTextClassName="small";

    const content = <>
      <DropdownNavLink  route={"/software/free"} name={mainT("software") + " (" + mainT("freecontent") + ")"} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
      <DropdownNavLink  route={"/software"} name={mainT("software") + " (" + mainT("premium") + ")"} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
      <DropdownNavLink  route={"/datascience/packages"} name={mainT("datapackages")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
      <DropdownNavLink  route={"/repositories"} name={mainT("repositories")} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
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

export default MyContentsMenu;
