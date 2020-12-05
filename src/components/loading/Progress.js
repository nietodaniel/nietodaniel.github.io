import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Progress = (val) => {
    const progressInstance = <ProgressBar now={val} label={`${val}%`} />;

    return (
        progressInstance
    )
}

export default Progress;