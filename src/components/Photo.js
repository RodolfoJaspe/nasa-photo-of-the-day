import React from 'react';
import styled from 'styled-components';

export default function (props) {
    const {photoData, dateHandler} = props;

    const MainDiv = styled.div`
        h2 {
            font-size: 2rem;
            color: rgb(99, 30, 30);
        }
        h3 {
        
        }
         img {
            width: 50vw;
        }
     
        .main {
            color: gray;
            padding: 5vh 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            background: black;
        }
        
        .info {
            width: 50vw;
        }
        
        input{
            font-size: 1rem;
        }
    `
    return (
        <MainDiv>
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
        </MainDiv>
    )
}