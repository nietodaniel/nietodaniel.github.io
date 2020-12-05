import Header from './Header'
import React from 'react';

const TextWithTitle = (title,textContent,titleClass,contentClass,titleTag) => {
    if(titleClass!=="")
        titleClass=" "+titleClass
    if(contentClass!=="")
        contentClass=" "+contentClass

    const content =  <>
        <span className="text-excerpt">
            <Header Tag={titleTag} className={"text-title"+titleClass} text={title} />
            <span className={"text-content"+contentClass}>{textContent}</span>
        </span>
    </> 

    return (
        content
    )
}

export default TextWithTitle;