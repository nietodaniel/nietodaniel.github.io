import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const ComingSoonPP = (tMAIN) => {

    const notFoundArr =[
        "comingsoon",
        ""
      ]
    
      const notfound = TransMultiPRM(tMAIN,"h2","subtitle","","pl-2 nospace",notFoundArr)

    return (
        notfound
    )
}

export default ComingSoonPP
