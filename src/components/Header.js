import React from 'react';
// import './Header.css';
import styled from 'styled-components';

export default function (props) {
    const {photoUrl} = props;

    const HeaderDiv = styled.div`
        background: url(${photoUrl});
        background-size: cover;
        background-position: top;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 5rem;
            color: rgb(255, 255, 255);
            text-shadow: 1px 1px 3px rgb(211, 246, 255);
        }
    `
    
    return (
        <HeaderDiv>
            <h1>NASA PHOTO OF THE DAY</h1>
        </HeaderDiv>
    )
}
