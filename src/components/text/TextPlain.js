const TextPlain = (content,contentClass) => {
    if(contentClass!=="")
        contentClass=" "+contentClass

    const content =  <>
            <span className="text-excerpt">
                <span className={"text-content"+contentClass}>{content}</span>
            </span>
        </>

    return (
        content
    )
}

export default TextPlain;