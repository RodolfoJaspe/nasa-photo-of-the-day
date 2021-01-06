import React from 'react';
import './Photo.css'

export default function (props) {
    console.log(props)
    const {photoData} = props
    return (
        <div className="main">
            <h2>{photoData.title}</h2>
            <img src={photoData.hdurl} />
            <div className="info">
                <p>{photoData.explanation}</p>
                <h3>{photoData.date}</h3>
            </div>
            
        </div>
    )
}