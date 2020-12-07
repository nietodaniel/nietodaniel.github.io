import React from 'react'

const SideVerticalPanel = (orientation, screenSize,leftContent,rightContent) => {
    const content =  <>
            <div className={"p-0 col-md-6"}>
                <span>{leftContent}</span>
            </div>
            <div className={"p-0 col-md-6"}>
                <span>{rightContent}</span>
            </div>
        </>

    return (
        content
    )
}

export default SideVerticalPanel;
