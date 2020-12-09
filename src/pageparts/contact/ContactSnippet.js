import React from 'react'
import LinkWithInfo from '../../components/buttons/LinkWithInfo'
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';
import ContactMenuOptions from '../../pageframe/menus/ContactMenuOptions';

const ContactSnippet = (screenType,tCV,tMain,buttonClassName,hideCV,hideSkills) => {

    let cvLink = LinkWithInfo(buttonClassName,<span className="small p-1">{tMain("viewcv")}</span>,tCV("viewcv"),"span","/cv") 
    let mySkills = LinkWithInfo(buttonClassName,<span className="small p-1">{tMain("myskills")}</span>,tCV("viewcv"),"span","/skills") 
    const menuClassName = "allowmouse nav-item dropdown m-auto pr-2";
    const buttonTextClassName = "small p-0";
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

    const removedNum = (hideCV?1:0) + (hideSkills?1:0)
    console.log("removedNum")
    console.log(removedNum)
    let colwidth =4

    let buttonWrapper =""

    if (screenType === "normal" ) {
      colwidth = 12
      buttonWrapper = (cont) => {
        return <div className={"col-" + colwidth + " text-center table"}>
          <span  className="align-middle">
            {cont}
          </span>
        </div>
      }
    }else{
      if(removedNum===1)
        colwidth = 6
      if(removedNum===2)
        colwidth = 12

      
      buttonClassName = buttonClassName + " small"
      buttonWrapper = (cont) => {
          return <div className={"col-" + colwidth + " text-center"}>
            <span  className="align-middle">
              {cont}
            </span>
          </div>
        }
        
  }


    const res = <div className="container-fluid m-0 p-0 mt-1 vertical-center h-100">
      <div className="row w-100 m-0 p-0 mb-5">
        {!hideCV && buttonWrapper(cvLink)}
        {!hideSkills && buttonWrapper(mySkills)}
        {buttonWrapper(ContactMe)}
      </div>
    </div>

    return res


}

export default ContactSnippet
