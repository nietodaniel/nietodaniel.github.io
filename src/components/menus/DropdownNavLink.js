import React from 'react';
import {NavLink} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownNavLink = ({
    locale,activeClassName,NavClassName,route,name,linkTextClassName
}) => {
    return (
        <Dropdown.Item as="span" className="bootstrap-override">
        <NavLink activeClassName={activeClassName}
           className={NavClassName}
           exact to={"/"+locale+route}><span className={linkTextClassName}>{name}</span></NavLink>
        </Dropdown.Item>
    )
}

export default DropdownNavLink; 
