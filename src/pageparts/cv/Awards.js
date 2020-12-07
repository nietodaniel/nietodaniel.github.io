import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const Awards = (tCV) => {

    const awardsArr = [
        "awards0",
        "awards1",
        "awards2"
      ]
      const awards = TransMultiPRM(tCV,"h2","subtitle","","pl-2 nospace",awardsArr)

    return (
        awards
    )
}

export default Awards