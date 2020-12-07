import React from 'react'
import SUB from './SUB';
import PR from './PR';

const TransMultiPR = (t,titletag,titleClassN,paragraphClass,classN,arrText) => {
    const title = arrText.shift(); 
    const list = arrText.map((item) =>  {return PR(classN,t(item))});
    const sub = title && SUB(titletag,titleClassN,t(title))

    return (
        <>
            <span>{sub}</span>
            <span className={paragraphClass}>{list}</span>
        </>
    )
}

export default TransMultiPR