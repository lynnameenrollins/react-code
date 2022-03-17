import React, {createContext, useState, useContext} from 'react';
import Component2Context from './Component2Context.';
import styles from './mystyle.module.css'

export const UserContext = createContext();
function Component1Context(props) {
    const[user, setUser] = useState("Peter Wilson")
    return (
            
            <UserContext.Provider value ={user}>
                <p className= {styles.ContextP}> Using useContext</p>
                <h1> {`Hello ${user} !`}</h1>
                <Component2Context user={user} />
            </UserContext.Provider>
        
        
    );
}

export default Component1Context;