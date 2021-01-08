import React from 'react';
import styled from 'styled-components';

export default function (props) {
    const {photoUrl} = props;

    const FooterDiv = styled.div`
        background: url(${photoUrl});
        background-size: cover;
        background-position: bottom;
        height: 20vh;
    `
    
    return (
        <FooterDiv>
        </FooterDiv>
    )
}