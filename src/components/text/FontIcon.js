import React from 'react'

const FontIcon = (iconSize,spanClass,iconName) => {
    if(spanClass!=="")
        spanClass=" "+spanClass
    return (
        <span className={"reficon"+spanClass}><i className={iconName+" "+iconSize}></i></span>
    )
}

export default FontIcon;