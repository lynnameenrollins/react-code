import React from 'react';
import {useNavigate} from 'react-router';

function Failure(props) {
    let navigate = useNavigate();
    function backtoSignIn(){
        navigate('/home')
    }
    return (
        <div style = {{backgroundColor:"#d13838"}}>
            <h1> Sorry!! Invalid Credentials</h1>
            <br></br>
            <button onClick={backtoSignIn}> Back to Sign In</button>
            <br></br>
            <br></br>
        </div>
    );
}

export default Failure;