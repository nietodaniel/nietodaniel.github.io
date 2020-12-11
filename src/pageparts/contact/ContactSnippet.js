import React from 'react'
import LinkWithInfo from '../../components/buttons/LinkWithInfo'
import MainDropDownMenu from '../../components/menus/MainDropDownMenu';
import ContactMenuOptions from '../../pageframe/menus/ContactMenuOptions';
import GetLocaleFromHead from '../../components/modules/GetLocaleFromHead';

const ContactSnippet = (screenType,tCV,tMain,buttonClassName,hideCV,hideSkills) => {

    const locale = GetLocaleFromHead()

    let cvLink = LinkWithInfo(buttonClassName,<span className="small p-1">{tMain("viewcv")}</span>,tMain("cv_info"),"span","/?/"+locale+"/cv/") 
    let mySkills = LinkWithInfo(buttonClassName,<span className="small p-1">{tMain("myskills")}</span>,tMain("skills_info"),"span","/?/"+locale+"/skills/") 
    let downloadpdf = LinkWithInfo(buttonClassName + " dpdf",<span className="small p-1">{tMain("downloadpdf")}</span>,tMain("download_info"),"span","/docs/CV - Daniel Nieto.pdf",true) 
    const menuClassName = "allowmouse nav-item dropdown m-auto pr-2";
    const buttonTextClassName = "small p-0";
    const contentClassName = "dropdown-menu"
    const ContactMe = <>
      <MainDropDownMenu 
        buttonText={tMain("contactme")}
        content={ContactMenuOptions(tMain)}
        menuClassName={menuClassName}
        buttonClassName={buttonClassName + "contactsnippet dropdown-toggle"}
        contentClassName={contentClassName}
        buttonTextClassName={buttonTextClassName}
      />
    </>

    const removedNum = (hideCV?1:0) + (hideSkills?1:0)
    let colwidth =4

    let buttonWrapper =""
    buttonClassName = buttonClassName + " small"

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
      if(removedNum>1)
        colwidth = 6

      buttonWrapper = (cont) => {
          return <div className={"col-" + colwidth + " text-center"}>
            <span  className="align-middle">
              {cont}
            </span>
          </div>
        }
        
  }


    const res = <div className="container-fluid m-0 p-0 mt-1 vertical-center h-100">
      <div className="row w-100 m-0 p-0">
        {!hideCV && buttonWrapper(cvLink)}
        {!hideSkills && buttonWrapper(mySkills)}
        {buttonWrapper(ContactMe)}
        {(removedNum===2) && buttonWrapper(downloadpdf)}
      </div>
    </div>

    return res


}

export default ContactSnippet
