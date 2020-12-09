import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const DataSciencePack = (tCV) => {

    const datasciencePackArr = [
        "datasciencepacks",
        "repositories2",
    ]
    const datascience = TransMultiPRM(tCV,"h2","subtitle","","pl-2 nospace",datasciencePackArr)

    return (
        datascience
    )
}

export default DataSciencePack
