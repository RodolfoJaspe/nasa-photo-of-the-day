import React from 'react';
import './Header.css'

export default function (props) {
    const {photoUrl} = props;
    console.log(photoUrl)
    
    return (
        <div className="header" style={{backgroundImage: `url(${photoUrl})`}}>
            <h1>NASA PHOTO OF THE DAY</h1>
        </div>
    )
}