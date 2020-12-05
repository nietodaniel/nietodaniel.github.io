import textWithTitle from '../text/textWithTitle'
const TopicSubIndex = (iterative,itemname,content,subtitleClass,contentClass,subtitleTag) => {
    
    const subtitle = iterative + itemname
    const content =  textWithTitle (subtitle,content,subtitleClass,contentClass,subtitleTag) 

    return (
        content
    )
}

export default TopicSubIndex;