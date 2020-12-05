import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownCustomFun = ({
    LinkClassName,fun,text
}) => {
    return (
        <Dropdown.Item as="span" className="bootstrap-override showcursor">
        <span className={LinkClassName} onClick={fun} >{text}</span>
        </Dropdown.Item>
    )
    
}

export default DropdownCustomFun; 
