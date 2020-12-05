import topicSubIndex from './topicSubIndex'
const MultiTopicSubIndex = (contentArray,subtitleClass,contentClass,subtitleTag,isIterativeText) => {
    
    const topicSubIndexMaker = (contentObject, index) => {
        const itemname = contentObject[0]
        const text = contentObject[1]
        if(isIterativeText===true)
            index = String.fromCharCode(94 + index);
        return <span className="text-paragraph">
            {topicSubIndex(index,itemname,text,subtitleClass,contentClass,subtitleTag)}
        </span>
    }
    const content =  contentArray.map((contentObject,index) =>  topicSubIndexMaker(contentObject,index));

    return (
        content
    )
}

export default MultiTopicSubIndex;