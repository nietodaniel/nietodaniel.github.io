import React from 'react'

const ProfilePic = (className,width) => {

    let role = ""
    const scientistSkills = "R, python, SQL, PowerBI"
    const softwareSkills = "React, Javascript, Bootstrap"

    if(document.documentElement.lang==="en"){
        role = "Data scientist (" + scientistSkills + "), software developer (" + softwareSkills + ")"
        
    }else{
        role = "Científico de datos (" + scientistSkills + "), desarrollador de software (" + softwareSkills + ")"
    }

    return (
        <img
            className={className}
            src={window.location.origin + "/img/daniel_nieto.png"}
            alt={"Daniel Nieto González: " + role}
            style={{ width: width }}
        />
    )
}

export default ProfilePic
