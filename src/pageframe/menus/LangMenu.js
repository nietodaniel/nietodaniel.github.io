import React from 'react';
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';
import DropdownNavLink from '../../components/menus/DropdownNavLink';

const LangMenu = (menuClassName,locale,i18n,path) => {
    const changeLanguage = lng => {
      window.history.pushState({}, null, '/'+lng+path);
      i18n.changeLanguage(lng);
    };
 
    const langs = ["en","es"];
    const langNames = ["English","Español"];

    const currLangIndex = langs.findIndex(element => element === locale);
    const currLang = langNames.splice(currLangIndex,1);
    langs.splice(currLangIndex,1);

    const buttonText = currLang;
    const buttonClassName = "btn btn-sm dropdown-toggle menubutton btnWithColor btn-outline-light pt-0 pb-0 dropdown-toggle btn btn-primary";
    const buttonTextClassName = "small";
    const contentClassName = "btn-sm small nicedarkbluebackground dropdown-menu";
    const NavClassName = "small dropdown-item-hover";
    const linkTextClassName="small";
 
    const content = <>
    <DropdownNavLink  route={"/experience"} onClick={() => changeLanguage(langs[0])} name={langNames[0]} linkTextClassName={linkTextClassName} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
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

export default LangMenu;
