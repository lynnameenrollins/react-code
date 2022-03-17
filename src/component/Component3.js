import React from 'react';
import Component4 from './Component4'
function Component3({user}) {
    return (
        <div>
                 <div>
            <h1>Component 3</h1>
            <Component4 user = {user} />
        </div>
        </div>
    );
}

export default Component3;