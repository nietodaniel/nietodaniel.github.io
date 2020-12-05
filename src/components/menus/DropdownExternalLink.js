import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownExternalLink = ({
    LinkClassName,href,text,isBlank
}) => {
    let target=""
    if(isBlank===true){
        target="_blank"
    }

    return (
        <Dropdown.Item as="span" className="bootstrap-override">
        <a className={LinkClassName} href={href} target={target}>{text}</a>
        </Dropdown.Item>
    )
    
}

export default DropdownExternalLink; 
