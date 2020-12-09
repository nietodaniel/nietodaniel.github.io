import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const NotFoundPP = (tNF) => {

    const notFoundArr =[
        "notfound0",
        "notfound1"
      ]
    
      const notfound = TransMultiPRM(tNF,"h2","subtitle","","pl-2 nospace",notFoundArr)

    return (
        notfound
    )
}

export default NotFoundPP
