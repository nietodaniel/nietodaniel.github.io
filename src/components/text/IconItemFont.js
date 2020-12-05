import baseIconItem from './BaseIconItem'
import fontIcon from './FontIcon'

const IconItemFont = (figureClass,iconSize,spanClass,contentClass,iconName,content,buttonLink) => {
    const IconFont = fontIcon(iconSize,spanClass,iconName)
    const res = baseIconItem (IconFont,figureClass,contentClass,content)
    
    return (
        res
    )
}

export default IconItemFont