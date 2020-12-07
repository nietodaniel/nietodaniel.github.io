import React from 'react'
import SUB from './SUB';
import PRM from './PRM'

const TransMultiPRM = (t,titletag,titleClassN,paragraphClass,classN,arrText) => {
    const title = arrText.shift();
    let txt = ""

    const lineMaker = (item) => {
        if(txt!==""){
            txt=txt+ "\n\r"
        }
        txt = txt + t(item)
    }
    
    arrText.forEach((item) =>  {lineMaker(item)});

    const sub = title && SUB(titletag,titleClassN,t(title))

    return (
        <>
            <span>{sub}</span>
            <span className={paragraphClass}>{PRM(classN,txt)}</span>
        </>
    )
}

export default TransMultiPRM