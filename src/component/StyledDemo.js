import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`;


function StyledDemo(props) {
    return (
        <div>
           <StyledButton>Login</StyledButton> 
        </div>
    );
}

export default StyledDemo;