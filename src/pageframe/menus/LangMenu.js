import React from 'react';
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';
import {Dropdown} from 'react-bootstrap'

const LangMenu = (menuClassName,i18n,locale) => {

    const changeLanguage = (lng) => {
      const inipath = window.location.search+window.location.hash
      console.log("inipath: ",inipath)
      const parts = inipath.split("/")
      parts.splice(0,2);
      console.log("parts: ",parts)
      const realpath = '/?/'+lng+"/"+parts.join("/")
      console.log("realpath: ",realpath)
      window.history.replaceState(null, {}, realpath)
      i18n.changeLanguage(lng);
    };
 
    const langs = ["en","es"];
    const langNames = ["English","Español"];

    const currLangIndex = langs.findIndex(element => element === locale);
    const currLang = langNames.splice(currLangIndex,1);
    langs.splice(currLangIndex,1);

    const buttonText = <><i className="text-white las la-globe mr-1"></i><span>{currLang}</span></>;
    const buttonClassName = "btn btn-sm dropdown-toggle menubutton btnWithColor btn-outline-light pt-0 pb-0 dropdown-toggle btn btn-primary";
    const buttonTextClassName = "small";
    const contentClassName = "btn-sm small nicedarkbluebackground dropdown-menu";
    const NavClassName = "small dropdown-item-hover";
    const linkTextClassName="small";

    const content = <>
      <Dropdown.Item className={NavClassName} onClick={() => changeLanguage(langs[0])}><span className={linkTextClassName}>{langNames[0]}</span></Dropdown.Item>
    </>

    return(
      <>
      <MainDropDownMenu 
      buttonText={buttonText}
      content={content}
      menuClassName={menuClassName}
      buttonClassName={buttonClassName}
      contentClassName={contentClassName}
      buttonTextClassName={buttonTextClassName}
       />
      </>
    )
}

export default LangMenu;
