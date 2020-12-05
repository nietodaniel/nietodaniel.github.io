import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const SubMenu = ({
    content,subMenuTitle,buttonClassName,subMenuButtonTextClassName,subMenuClassName
}) => {

    return (
        <>
        <Dropdown drop={"right"} className={subMenuClassName} >
          <Dropdown.Toggle  as="span" variant="" className={buttonClassName} href="#/" style={{cursor:'pointer'}}>
          <span className={subMenuButtonTextClassName}>{subMenuTitle}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {content}
          </Dropdown.Menu>
        </Dropdown>
        </>
    )
}

export default SubMenu;