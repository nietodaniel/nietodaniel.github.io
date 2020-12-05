import React from 'react'
import {NavLink} from 'react-router-dom';

const HomeLink = (mainT,locale) => {
    return(
        <NavLink activeClassName={"active"}
           className={""}
           exact to={"/"+locale}><h2 className="App-brand navmaintext p-0 m-0">{mainT("dnportfolio")}</h2></NavLink>

    )
}

export default HomeLink;

