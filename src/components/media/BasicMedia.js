const BasicMedia = (className,aspectRatio,location) => {
    if(className!=="")
        className=" "+className
    let resClass=""
    switch(aspectRatio) {
        case 21:
            resClass = "21by9"
            break;
        case 4:
            resClass = "16by9"
            break;
        case 1:
            resClass = "4by3"
            break;
        default:
            resClass = "1by1"
    } 

    return (
        <div className={"embed-responsive embed-responsive-"+resClass+className}>
            <iframe className="embed-responsive-item" src={location} allowfullscreen></iframe>
        </div>
    )
}

export default BasicMedia;