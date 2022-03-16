import React, {useState, useEffect} from 'react';

function EffectNew() {
    const[count, setCount] = useState(0);
    const[calculation, setCalculation] = useState(0);

    useEffect(() =>{
        setCalculation(() => count*2);
    },[count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick ={() =>setCount((c) => c+1)}> +</button>   
            <h2>Calculation: {calculation}</h2>
        </div>
    );

    }
export default EffectNew;