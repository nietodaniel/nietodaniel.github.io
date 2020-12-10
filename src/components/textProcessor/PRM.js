import React from 'react'
import ReactMarkdown from 'react-markdown'
import LocaleForMarkDownRoute from '../modules/LocaleForMarkDownRoute'

const PRM = (classN,text) => {

    const txt = LocaleForMarkDownRoute(text)

    return (
        <ReactMarkdown renderers={{Paragraph: 'span'}} className={classN} source={txt} />
    )
}

export default PRM