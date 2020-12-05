import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuNavLink = ({
    locale,activeClassName,NavClassName,route,name,linkTextClassName
}) => {
    return (
        <NavLink as="span" activeClassName={activeClassName}
           className={NavClassName}
           exact to={"/"+locale+route}><span className={linkTextClassName}>{name}</span></NavLink>
    )
}

export default MenuNavLink; 
