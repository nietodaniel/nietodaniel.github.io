import React from 'react';

const ProfilePic = (className,height) => {
    return (
        <img
            className={className}
            src={require('../../assets/img/daniel_nieto.png')}
            alt="Daniel Nieto"
            style={{ height: height }}
        />
    )
}

export default ProfilePic;
