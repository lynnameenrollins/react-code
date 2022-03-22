import React from 'react';
import {useNavigate} from 'react-router';



function Success(props) {
    let navigate = useNavigate();
    
  
    function backtoSignIn(){
        navigate('/home')
    }  
    
    return (
        
        <div style = {{backgroundColor:"#2e783c"}}>
            
            <h1>Hello NAME, you are successfully logged in!</h1>
            <br></br>
            <br></br>
            <button onClick={backtoSignIn}> Back to Sign In</button>
            <br></br>
            <br></br>
        </div>
    );
}

export default Success;