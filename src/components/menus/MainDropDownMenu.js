import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const MainDropDownMenu = ({
    buttonText, content, menuClassName, buttonClassName, contentClassName, buttonTextClassName
}) => {

    return (
        <>
        <Dropdown className={menuClassName}>
          <Dropdown.Toggle className={buttonClassName}>
        <span className={buttonTextClassName}>{buttonText}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className={contentClassName}>
            {content}
          </Dropdown.Menu>
        </Dropdown>
        </>
    )
}

export default MainDropDownMenu;

