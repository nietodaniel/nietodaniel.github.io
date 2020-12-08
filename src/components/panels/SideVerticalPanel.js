import React from 'react'

const SideVerticalPanel = (screenType,leftContent,rightContent) => {
    
    let containerClass = "container-fluid m-0 p-0  pr-1 pl-1" 

    if (screenType!=="normal"){
        containerClass = containerClass + " small"
    }

    let content = ""

    if (screenType === "normal" ) {
    content =  <>
        <div className={"p-0 col-6"}>
            <span>{leftContent}</span>
        </div>
        <div className={"p-0 col-6"}>
            <span>{rightContent}</span>
        </div>
    </>
    }else if(screenType === "miniV"  ){
        content =  <>
        <div className={"p-0 col-12"}>
            <span>{leftContent}</span>
        </div>
        <div className={"p-0 col-12"}>
            <span>{rightContent}</span>
        </div>
    </>
    }else{
        content =  <>
        <div className={"p-0 col-12"}>
            <span>{leftContent}</span>
        </div>
        <div className={"p-0 col-12"}>
            <span>{rightContent}</span>
        </div>
    </>
    }



    

    return (
        <div className={containerClass}>
            <div className="row m-0 p-0">
                {content}
            </div>
        </div>
    )
}

export default SideVerticalPanel;
