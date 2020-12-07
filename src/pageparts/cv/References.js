import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const References = (tCV) => {

    const referencesArr =[
        "references0",
        "references1",
        "references2",
        "references3",
        "references4",
        "references5",
        "references6",
        "references7",
        "references8"
      ]
    
      const references = TransMultiPRM(tCV,"h2","subtitle","","pl-2 nospace",referencesArr)

    return (
        references
    )
}

export default References
