import React from 'react';

const ProfilePic = (className,height) => {
    return (
        <img
            className={className}
            src={require('../../assets/img/daniel_nieto.jpg')}
            alt="Daniel Nieto"
            style={{ height: height }}
        />
    )
}

export default ProfilePic;
