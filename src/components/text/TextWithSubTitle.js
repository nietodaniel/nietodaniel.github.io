import Header from './Header'

const TextWithTitle = (title,subtitle,content,titleClass,subtitleClass,contentClass,titleTag,subtitleTag) => {
    if(titleClass!=="")
        titleClass=" "+titleClass
    if(subtitleClass!=="")
        subtitleClass=" "+subtitleClass
    if(contentClass!=="")
        contentClass=" "+contentClass

    const content =  <>
            <span className="text-excerpt">
                <Header Tag={titleTag} className={"text-title"+titleClass} text={title} />
                <Header Tag={subtitleTag} className={"text-subtitle"+subtitleClass} text={subtitle} />
                <span className={"text-content"+contentClass}>{content}</span>
            </span>
        </> 

    return (
        content
    )
}

export default TextWithTitle;