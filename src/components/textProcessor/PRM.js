import React from 'react'
import ReactMarkdown from 'react-markdown'

const PRM = (classN,text) => {
    return (
        <ReactMarkdown renderers={{Paragraph: 'span'}} className={classN} source={text} />
    )
}

export default PRM