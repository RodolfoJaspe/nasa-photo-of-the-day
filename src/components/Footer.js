import React from 'react';
import './Footer.css'

export default function (props) {
    const {photoUrl} = props;
    
    return (
        <div className="footer" style={{backgroundImage: `url(${photoUrl})`}}>
        </div>
    )
}