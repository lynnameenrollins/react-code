import React, { useContext } from 'react';
import {UserContext} from './Component1Context'

function Component4({user}) {
    
    return (
    
    <div>
            <h1>Component 4</h1>
            <h1>{`Hello ${user} again!`}</h1>
            
        </div>
        
    );
}

export default Component4;