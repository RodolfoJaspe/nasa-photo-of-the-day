import React from 'react';
import './Photo.css'

export default function (props) {
    const {photoData, dateHandler} = props
    return (
        <div className="main">
            <h2>{photoData.title}</h2>
            <img src={photoData.url} alt="NASA POTD"/>
            <div className="info">
                <p>{photoData.explanation}</p>
                <h3>{photoData.date}</h3>
                <form>
                    <input type="date" onChange={dateHandler}/>
                </form>
            </div>
            
        </div>
    )
}