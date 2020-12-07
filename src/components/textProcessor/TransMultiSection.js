import React from 'react'
import SUB from './SUB';

const TransMultiSection = (t,titletag,titleClassN,paragraphClass,classN,title,sectionsArr) => {
    const sub = title && SUB(titletag,titleClassN,t(title))
    const list = sectionsArr.map((item) =>  {return <span className={classN}>{item}</span>});
    

    return (
        <>
            <span>{sub}</span>
            <span className={paragraphClass}>{list}</span>
        </>
    )
}

export default TransMultiSection