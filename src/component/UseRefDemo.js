import React, {useState, useEffect, useRef} from 'react';
import styles from './mystyle.module.css'

function UseRefDemo(props) {
    const [inputValue, setInputValue] = useState("")
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current +1 ;
    });

    return (
        <div className= {styles.UseRef}>
            <input type="text" value = {inputValue} onChange = {(e) =>setInputValue(e.target.value)} />
            <h1>Render Count: {count.current}</h1>
        </div>
    );
}

export default UseRefDemo;