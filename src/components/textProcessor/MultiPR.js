import React from 'react'
import SUB from './SUB';
import PR from './PR';

const MultiPR = (titletag,titleClassN,paragraphClass,classN,arrText) => {
    const title = arrText.shift(); 
    
    const list = arrText.map((item) =>  {return PR(classN,item)});
    const sub = title && SUB(titletag,titleClassN,title)

    return (
        <>
            <span>{sub}</span>
            <span className={paragraphClass}>{list}</span>
        </>
    )
}

export default MultiPR