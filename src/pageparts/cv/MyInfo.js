import React from 'react'
import {EmailLink,TelLink} from '../../components/modules/MyContactInfo';
import SUB from '../../components/textProcessor/SUB';
import PRM from '../../components/textProcessor/PRM';

const MyInfo = (tCV) => {

    const intro = <span className="text-center">
        {SUB("h1","subtitle",tCV("namex"))}
        <span className="newline"><span className="text-center nolineP littlespace mt-2">{ EmailLink() }{<span className="pl-1">   </span>}{ TelLink() }</span></span>
        <span className="newline"><span className="text-center nolineP littlespace"><p><i className="las la-map-marker la-lg mr-2"></i></p><p>Remote work / Bogotá, Colombia</p></span></span>
        <span className="newline"><span className="text-center nolineP littlespace"><p><i className="las la-globe-americas la-lg mr-2"></i></p>{PRM("","[https://nietodaniel.github.io](https://nietodaniel.github.io)")}</span></span>
        <span className="newline"><span className="text-center nolineP littlespace"><p><i className="la la-linkedin la-lg mr-2"></i></p>{PRM("","[https://www.linkedin.com/in/nietodaniel-apps/](https://www.linkedin.com/in/nietodaniel-apps/)")}</span></span>
    </span>

    return (
        intro
    )
}

export default MyInfo