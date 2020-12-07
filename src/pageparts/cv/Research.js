import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

export const Research = (tCV) => {

    const researchArr = [
        "research0",
        "research1",
        "research2",
        "research3"
      ]
      const research = TransMultiPRM(tCV,"h2","subtitle","","pl-2 nospace",researchArr)

    return (
        research
    )
}

export default Research 
