import React from 'react'

const NormalPanel = (orientation, screenSize,content) => {
    const res =  <>
            <div className={"p-0 col col-12 col-md-8 offset-md-2"}>
                <span>{content}</span>
            </div>
        </>

    return (
        res
    )
}

export default NormalPanel;
