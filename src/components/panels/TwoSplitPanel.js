import React from 'react'

const TwoSplitPanel = (leftContent,rightContent,firstColWidth) => {
    const secondColWidth = 12 - firstColWidth;
    const content =  <>
            <div className={"p-0 col-12 col-md-"+firstColWidth}>
                <span>{leftContent}</span>
            </div>
            <div className={"p-0 col-12 col-md-"+secondColWidth}>
                <span>{rightContent}</span>
            </div>
        </>

    return (
        content
    )
}

export default TwoSplitPanel;
