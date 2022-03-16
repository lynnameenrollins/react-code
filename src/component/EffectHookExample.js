import React, {useState, useEffect} from 'react';

function EffectHookExample() {
    const[count, SetCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            SetCount((count) => count +1);
            
    }, 1000);}, )
    
    return (
        <div>
            <h1> I have rendered {count} times!</h1>   
        </div>
    );
}

export default EffectHookExample;