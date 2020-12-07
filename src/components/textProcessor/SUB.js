import React from 'react'

const SUB = (TagN,classN,text) => {

    let res = "empty..."

    if(text.length>0){
        res = <TagN className={classN}>{text}</TagN>
    }

    return (
        res
    )
}

export default SUB