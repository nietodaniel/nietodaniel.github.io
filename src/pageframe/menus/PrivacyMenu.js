import React from 'react'
import MenuNavLink from '../../components/buttons/MenuNavLink';

const PrivacyMenu = (t,screenType,locale) => {

    const NavClassName = "linktext pr-2";
    
    let addClass = "";
    if(screenType!=="normal"){
        addClass = "small ";
    }

    const rights = <>
        <span className={addClass+" pr-1"}>{t("rights")}</span>
    </>

    const TermsNpolicies = <>
        <MenuNavLink  route={"/terms"} name={t("terms")} linkTextClassName={addClass} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
        <MenuNavLink  route={"/privacy"} name={"• "+t("privacy")} linkTextClassName={addClass} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
        <MenuNavLink  route={"/cookies"} name={"• "+t("cookies")} linkTextClassName={addClass} activeClassName={"active"} NavClassName={NavClassName} locale={locale} /> 
    </>

    let content = ""


    if(screenType!=="normal"){
        content = <>
            <span className="d-table-row">{rights}</span>
            <span className="d-table-row">{TermsNpolicies}</span>
        </>
    }else{
        content = <>
            <span>{rights}</span>
            <span>{TermsNpolicies}</span>
        </>
    }

    return (
        <span className="small text-white d-block">
            {content}
        </span>
    )
}

export default PrivacyMenu;

