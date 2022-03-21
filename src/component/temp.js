import React from 'react';
import {useState} from 'react';

function CreateForm(props) {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState('');
    const firstNameChange = (e) => {
       setFirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setLastName(e.target.value);
     }
     const ageChange = (e) => {
        setAge(e.target.value);
     }
    return (
        <div>
            <label>First Name: </label>
            <input onChange={firstNameChange} value = {firstName}/>
            <label>Last Name: </label>
            <input onChange={lastNameChange} value = {lastName}/>
            <label>Age: </label>
            <input onChange={ageChange} value = {age}/>
            
            <button > Submit</button>

            
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <h2>{age}</h2>
        </div>
    );
}

export default CreateForm;