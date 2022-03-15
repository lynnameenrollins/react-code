import React from 'react';

function clickedButton(props) {
    console.log("The button has been clicked");
    return(
        <div>
            <h1> From a functional component</h1>
            <p> Hi {props.name}: age, {props.age}</p>
        </div>
    )
}

export default clickedButton;