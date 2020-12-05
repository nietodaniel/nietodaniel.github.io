import React from 'react'
import DropdownExternalLink from '../../components/menus/DropdownExternalLink';

const NavClassName = "small dropdown-item-hover "

const ContactMenuOptions = (mainT) => {

  const whatsappButtonContent= <>
    <i className="lab la-whatsapp la-lg" style={{color: '#4ac959'}}></i ><span className="small  m-1">Whatsapp</span>
  </>

  const wappURL = "https://api.whatsapp.com/send?phone=573232350963&text=" + mainT("help")

  
  return(
    <>
      <DropdownExternalLink LinkClassName={NavClassName} href={wappURL} text={whatsappButtonContent} isBlank={true} ></DropdownExternalLink>
    </>
    )
}
export default ContactMenuOptions;