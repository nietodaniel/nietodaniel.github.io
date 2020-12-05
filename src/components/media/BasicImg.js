const BasicImg = (className,title,alt,style,location,isAsset) => {
    if(isAsset===true)
        location = require('../../assets/img/'+location)

    return (
        <img
            className={className}
            src={location}
            alt={alt}
            title={title}
            style={style}
        />
    )
}

export default BasicImg;