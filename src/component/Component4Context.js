import React, {useContext} from 'react';
import Component1Context from './Component1Context';
import {UserContext} from './Component1Context'

function Component4Context() {
    const user = useContext(UserContext);
    return (
    
    <div>
            <h1>Component 4</h1>
            <h1>{`Hello ${user} again!`}</h1>
            
        </div>
        
    );
}

export default Component4Context;