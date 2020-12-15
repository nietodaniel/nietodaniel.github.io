import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const SoftwarePP = (t) => {

    const contentArr =[
        "content0",
        "content1",
        "content2",
        "content3",
        "content4",
        "content5",
        "content6",
        "content7"
      ]
    
      const txt = TransMultiPRM(t,"h2","subtitle","","pl-2 nospace",contentArr)

    return (
        <span className="small">{txt}</span>
    )
}

export default SoftwarePP
