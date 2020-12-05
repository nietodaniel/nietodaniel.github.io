import React from 'react'

const BaseIconItem = (icon,figureClass,contentClass,content) => {
    return (
        <figure className={figureClass}>
            {icon}
            <figcaption className={contentClass}>{content}</figcaption>
        </figure>
    )
}

export default BaseIconItem