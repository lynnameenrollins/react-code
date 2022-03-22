import React from 'react';
import {useNavigate} from 'react-router';

function Redirect({data}) {
    let navigate = useNavigate();

    if({data})
        navigate('/success');
    else
        navigate('/failure');
    
    return (
        <div>
            <h1>On the redirect page</h1>
            {/* <button onClick={handleClick} >Sign In </button> */}
        </div>
    );
}
export default Redirect;