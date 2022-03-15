import React, { Component } from 'react';

class MyCalculator extends Component {
    constructor(){
        super();
        this.state ={
            number1: 1,
            number2:2,
            answer: 9
        };
    }
    render() {
        return (
            <div>
                
            <h1>My Very Simple Calculator!</h1>
            <p>You can pick two numbers and perform a simple operation on them!</p>
            <p> Just input your number and click the operation you would like to perform!</p>
            
             
            
            <label>First Number: </label>
            <input type="number" id="number1"></input>
            <p></p>
            <label>Second Number: </label>
            <input type="number" id="number2"></input>
            <p></p>
            <button type="button" id ="buttonAdd" onClick={addNumbers}>Add</button>
            <button type="button" id ="buttonSub" onClick={subNumbers}>Subtract</button>
            <button type="button"  id ="buttonMulti"onClick={mutliNumbers}>Multiply</button>
            <button type="button" id ="buttonDivide" onClick={divideNumbers}>Divide </button>
            <p></p>
            <label> Your Answer: </label>
            <input type="number" id="answer"></input>
            {/* <p> Your Answer: {this.state.answer}</p> */}
            </div>
        );
    }
}


function addNumbers(){
    var a, b, c;
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);
    c = a + b;
    console.log('a(', a, ' ) + b(', b, ')= ', c)
    document.getElementById("answer").value = c;
    

}

    
    
function subNumbers(){
    var a, b, c;
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);
    c = a - b;
    document.getElementById("answer").value = c;
    return c;

}
    
function mutliNumbers(){
    var a, b, c;
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);
    c = a * b;
    document.getElementById("answer").value = c;
    return c;

}

function divideNumbers(){
    var a, b, c;
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);
    c = a / b;
    document.getElementById("answer").value = c;
    return c;

}
export default MyCalculator;