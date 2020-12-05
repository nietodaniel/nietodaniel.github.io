import React from 'react'
import DropdownExternalLink from '../../components/menus/DropdownExternalLink';

const NavClassName = "small dropdown-item-hover "

const ContactMenuOptions = (mainT) => {

  const whatsappButtonContent= <>
    <i className="lab la-whatsapp la-lg" style={{color: '#4ac959'}}></i ><span className="small  m-1">Whatsapp</span>
  </>

  const callButtonContent= <>
    <i className="las la-phone la-lg" style={{color: '#ffffff'}}></i ><span className="small  m-1">{"+057 3232350963"}</span>
  </>

  const emailButtonContent= <>
    <i className="las la-envelope la-lg" style={{color: '#ffffff'}}></i ><span className="small  m-1">{"nieto.daniel221@gmail.com"}</span>
  </>
  
  const wappURL = "https://api.whatsapp.com/send?phone=573232350963&text=" + mainT("help")
  const callURL = "tel:+573232350963"
  const emailURL = "mailto:nieto.daniel221@gmail.com"
  
  return(
    <>
      <DropdownExternalLink LinkClassName={NavClassName} href={wappURL} text={whatsappButtonContent} isBlank={true} ></DropdownExternalLink>
      <DropdownExternalLink LinkClassName={NavClassName} href={callURL} text={callButtonContent} isBlank={true} ></DropdownExternalLink>
      <DropdownExternalLink LinkClassName={NavClassName} href={emailURL} text={emailButtonContent} isBlank={true} ></DropdownExternalLink>
    </>
    )
}
export default ContactMenuOptions;