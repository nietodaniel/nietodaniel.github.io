const LinesToVignete = (text) => {
    const delimiter = "\n"
    const arr = text.split(delimiter)
    const list = arr.map((item) =>  <li>{item}</li>);

    return (
        <ul>{list}</ul>
    )
}

export default LinesToVignete;