import React, {useState, useEffect} from 'react';

function MyCalculatorFunction() {
    const [number1, setNumber1]= useState(5);
    const [number2, setNumber2]= useState(3);
    const [answer, setAnswer] = useState(0);
    const [timer, setTimer] = useState(0)
  
    useEffect(()=>{
        setTimeout(()=>{
            setTimer((count) => count +1);
        }, 1000);
});
    return(
        <div style={{backgroundColor :"#97a1e8"}}> 
            <h1 style={{backgroundColor :"#97a1e8", color:"#394280", fontStyle:"italic"}}>My Very Simple Calculator Using a Functional Component!</h1>
            <p style={{backgroundColor :"#97a1e8"}}>You can pick two numbers and perform a simple operation on them!</p>
            <p style={{backgroundColor :"#97a1e8"}}> Just input your number and click the operation you would like to perform!</p>
            <label style={{backgroundColor :"#97a1e8"}}>First Number: </label>
            <input type="number" id = "number1" onChange={e=>setNumber1(e.target.value)} ></input>
            <p></p>
            <label style={{backgroundColor :"#97a1e8"}}>Second Number: </label>
            <input type="number" id = "number2" onChange={e=>setNumber2(e.target.value)}></input>
            <p></p>
            <button type="button" id ="buttonAdd" onClick={()=>setAnswer(Number(number1)+Number(number2))} >Add</button>
            <button type="button" id ="buttonSub"onClick={()=>setAnswer(number1-number2)} >Subtract</button>
            <button type="button"  id ="buttonMulti"onClick={()=>setAnswer(number1*number2)}>Multiply</button>
            <button type="button" id ="buttonDivide" onClick={()=>setAnswer(number1/number2)} >Divide </button>
            <p></p>
            
            <p style={{backgroundColor :"#97a1e8", fontSize:"20px", fontWeight:"bold"}} >Answer= {answer}</p>
            
            <h2>You have been on this page: {timer} seconds</h2>
        </div>
        
    )
}


export default MyCalculatorFunction;