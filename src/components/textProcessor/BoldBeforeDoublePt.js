const BoldBeforeDoublePt = (text) => {
    const arr = text.split(/:(.+)/)
    let res = ""
    if(arr.length>1){
        res = <><span className="font-weight-bold">{arr[0]}</span><span>{arr[1]}</span></>
    }else{
        <span>{arr[0]}</span>
    }

    return (
        res
    )
}

export default BoldBeforeDoublePt;