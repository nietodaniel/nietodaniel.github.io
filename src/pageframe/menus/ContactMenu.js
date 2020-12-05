import React from 'react';
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';
import ContactMenuOptions from './ContactMenuOptions'

const ContactMenu = (mainT,isTop) => {
    const buttonText = mainT("contactme");

    let topText ="ChatTop"
    if(isTop===false){
      topText="ChatBottom"
    }

    const menuClassName = "allowmouse nav-item dropdown m-auto pr-2";
    const buttonClassName = "btn btn-sm dropdown-toggle Appbackgroundcolor menubutton btnWithColor btn-outline-light pt-0 pb-0"
    const buttonTextClassName = "small p-1";
    const contentClassName = "dropdown-menu"

    const content = ContactMenuOptions(mainT);

    return(
      <div id = {topText} className="chatbutton">
      <MainDropDownMenu 
      buttonText={buttonText}
      content={content}
      menuClassName={menuClassName}
      buttonClassName={buttonClassName}
      contentClassName={contentClassName}
      buttonTextClassName={buttonTextClassName}
       />
       </div>
    )
}

export default ContactMenu;