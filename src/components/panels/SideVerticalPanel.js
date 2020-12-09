import React from 'react'

const SideVerticalPanel = (screenType,leftContent,rightContent,inBeginningAndEndMini) => {

    let containerClass = "container-fluid m-0 p-0  pr-1 pl-1 h-100" 

    if (screenType!=="normal"){
        containerClass = containerClass + " small"
    }

    let content = ""

    if (screenType === "normal" ) {
    content =  <div className="row w-100 m-0 p-0 fullheight">
        <div className={"p-0 offset-1 col-6 vertical-center "}>
            <span>{leftContent}</span>
        </div>
        <div className={"p-0 col-4"}>
            <span>{rightContent}</span>
        </div>
    </div>
    }else{
        let overPanel =""
        if(inBeginningAndEndMini===true){
            overPanel = <div className={"p-0 col-12"}>
                <span>{rightContent}</span>
            </div>
        }

       if(screenType === "miniV"  ){
        content =  <div className="row w-100 m-0 p-0">
            {overPanel}
        <div className={"p-0 col-12"}>
            <span>{leftContent}</span>
        </div>
        <div className={"p-0 col-12"}>
            <span>{rightContent}</span>
        </div>
    </div>
    }else{
        content =  <div className="row w-100 m-0 p-0">
            {overPanel}
        <div className={"p-0 col-12"}>
            <span>{leftContent}</span>
        </div>
        <div className={"p-0 col-12"}>
            <span>{rightContent}</span>
        </div>
    </div>
    }
    }



    

    return (
        <div className={containerClass}>
            {content}
        </div>
    )
}

export default SideVerticalPanel;
