import React from 'react';

function NumberList(props) {

    const  listItems = props.numbers;
    console.log(listItems);

    const numbers = listItems.map((a) => 
        <li key={a.toString()}> {a}</li>
    )

    return (
        
            <ul>{numbers}</ul>
    
    );
}

export default NumberList;