import React from 'react'
import SUB from './SUB';
import PRM from './PRM'

const MultiPRM = (titletag,titleClassN,paragraphClass,classN,arrText) => {
    const title = arrText.shift(); 
    const list = arrText.map((item) =>  {return PRM(classN,item)});
    const sub = title && SUB(titletag,titleClassN,title)

    return (
        <>
            <span>{sub}</span>
            <span className={paragraphClass}>{list}</span>
        </>
    )
}

export default MultiPRM