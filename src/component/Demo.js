import React, {useState} from 'react';
// import './style.css'
import styles from './mystyle.module.css'

function Demo() {
    const[car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    return (

        <div>
            <h1 className= {styles.demo1}>My favorite car is {car.brand}, {car.model}</h1>
            <p>My car color is: {car.color}</p>
            <button onClick={() => setCar({...car,color:"Blue"})}>Change Car Color</button>
        </div>
    );
}

export default Demo;