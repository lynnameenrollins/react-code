import React from 'react';

function Child1({setMessage}) {
    
    const onButtonClick =(changeValue) =>{
        setMessage(changeValue)
    }
    return (
        <div>
            <button onClick={()=>onButtonClick("Message from Child 1")}>Child1 Button</button>
        </div>
    );
}

export default Child1;