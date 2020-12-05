import React from 'react';

const Logoicon = (className,height) => {
    return (
        <img
            className={className}
            src={window.location.origin + "/img/logo.png"}
            alt="Digital MedTools Logo"
            style={{ height: height }}
        />
    )
}

export default Logoicon;
