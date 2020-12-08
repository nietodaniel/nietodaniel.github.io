import PRM from '../../components/textProcessor/PRM';
import React from 'react'

const Summary = (tCV) => {

    const summary = PRM("",tCV("summary"))

    return (
        <span className="text-justify">{summary}</span>
    )
}

export default Summary