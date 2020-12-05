import React from 'react'
import baseIconItem from './BaseIconItem'
import basicImg from '../media/BasicImg'

const IconItemImg = (figureClass,imgClassName,imgStyle,contentClass,content,imgAsset,imgTitle,imgAlt) => {
    
    const IconImg = basicImg(imgClassName,imgTitle,imgAlt,imgStyle,imgAsset,true)
    const content = baseIconItem (IconImg,figureClass,contentClass,content)
    
    return (
        content
    )
}

export default IconItemImg