import React, {useState} from 'react';
import Component2 from './Component2'
import styles from './mystyle.module.css'

function Component1(props) {
    const[user, setUser] = useState("David Miller")
    return (
        <div>
        <p className= {styles.WOContextP}> Without using use Context</p>
        <h1 className= {styles.Component1}> {`Hello ${user} !`}</h1>
        <Component2 user={user} />
        </div>
    );
}

export default Component1;