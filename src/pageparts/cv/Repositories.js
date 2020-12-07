import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const Repositories = (tCV) => {

    const repositoriesArr = [
        "repositories0",
        "repositories1",
        "repositories2",
        "repositories3",
        "repositories4"
    ]
    const repositories = TransMultiPRM(tCV,"h2","subtitle","","pl-2 nospace",repositoriesArr)

    return (
        repositories
    )
}

export default Repositories
