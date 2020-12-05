import React from 'react'

const TriSplitPanel = (leftContent,centerContent,rightContent,classSection1,classSection2,classSection3) => {
    const content =  <>
            <div className="col-12 col-sm-4">
                <span className={classSection1}>{leftContent}</span>
            </div>
            <div className="col-12 col-sm-4">
                <span className={classSection2}>{centerContent}</span>
            </div>
            <div className="col-12 col-sm-4">
                <span className={classSection3}>{rightContent}</span>
            </div>
        </>

    return (
        content
    )
}

export default TriSplitPanel;
