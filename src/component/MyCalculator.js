import React, { Component } from 'react';

class MyCalculator extends Component {
    constructor(props){
        super(props);
        this.state ={
            message: "Testing message",
            number1: 1,
            number2:2,
            answer: ""
        };
    }
    addNumbers =() =>{
        var a, b, c;
        var a = Number(document.getElementById("number1").value);
        var b = Number(document.getElementById("number2").value);
        
        c = a + b
        console.log('a(', a, ' ) + b(', b, ')= ', c)
        
        this.setState({
            answer: c
        });
    };
    subNumbers =() =>{
        var a, b, c;
        var a = Number(document.getElementById("number1").value);
        var b = Number(document.getElementById("number2").value);
        c = a - b;
        console.log('a(', a, ' ) - b(', b, ')= ', c)
        
        this.setState({
            answer: c
        });
    };
    mutliNumbers =() =>{
        var a, b, c;
        var a = Number(document.getElementById("number1").value);
        var b = Number(document.getElementById("number2").value);
        c = a * b;
        console.log('a(', a, ' ) * b(', b, ')= ', c)
        
        this.setState({
            answer: c
        });
    };
    divideNumbers =() =>{
        var a, b, c;
        var a = Number(document.getElementById("number1").value);
        var b = Number(document.getElementById("number2").value);
        c = a / b;
        console.log('a(', a, ' ) / b(', b, ')= ', c)
        
        this.setState({
            answer: c
        });
    };
  
            

    render() {
        return (
            <div>

            <h3>{this.state.message}</h3>    
            <h1>My Very Simple Calculator!</h1>
            <p>You can pick two numbers and perform a simple operation on them!</p>
            <p> Just input your number and click the operation you would like to perform!</p>
            
                   
            <label>First Number: </label>
            <input type="number" id="number1"></input>
            <p></p>
            <label>Second Number: </label>
            <input type="number" id="number2"></input>
            <p></p>
            <button type="button" id ="buttonAdd" onClick={this.addNumbers}>Add</button>
            <button type="button" id ="buttonSub" onClick={this.subNumbers}>Subtract</button>
            <button type="button"  id ="buttonMulti"onClick={this.mutliNumbers}>Multiply</button>
            <button type="button" id ="buttonDivide" onClick={this.divideNumbers}>Divide </button>
            <p></p>
            {/* <label> Your Answer: </label>
            <input type="number" id="answer"></input> */}
           
            <p> Your Answer: {this.state.answer}</p>
            </div>
        );
    }
}


// addNumbers =() =>{
//     var a, b, c;
//     var a = Number(document.getElementById("number1").value);
//     var b = Number(document.getElementById("number2").value);
//     c = a + b;
//     console.log('a(', a, ' ) + b(', b, ')= ', c)
//     document.getElementById("answer").value = c;
//     this.setState({
//         answer: "45"
//     })

// }

    
    
// function subNumbers(){
//     var a, b, c;
//     var a = Number(document.getElementById("number1").value);
//     var b = Number(document.getElementById("number2").value);
//     c = a - b;
//     document.getElementById("answer").value = c;
//     return c;

// }
    
// function mutliNumbers(){
//     var a, b, c;
//     var a = Number(document.getElementById("number1").value);
//     var b = Number(document.getElementById("number2").value);
//     c = a * b;
//     document.getElementById("answer").value = c;
//     return c;

// }

// function divideNumbers(){
//     var a, b, c;
//     var a = Number(document.getElementById("number1").value);
//     var b = Number(document.getElementById("number2").value);
//     c = a / b;
//     document.getElementById("answer").value = c;
//     return c;

// }

export default MyCalculator;