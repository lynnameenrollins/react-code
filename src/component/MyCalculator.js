import React, { Component } from 'react';

class MyCalculator extends Component {
    constructor(props){
        super(props);
        this.state ={
            message: "Testing message",
            number1: 0,
            number2:0,
            answer: 0
        };
    }

    handleChange = () =>{
        this.setState({number1:Number(document.getElementById("number1").value)});
        this.setState({number2:Number(document.getElementById("number2").value)});  
    }
    addNumbers =() =>{
        // var a, b, c;
        var c;
        this.setState({number1:Number(document.getElementById("number1").value)});
        this.setState({number2:Number(document.getElementById("number2").value)});
   
        c = this.state.number1 + this.state.number2
        console.log('a(', this.state.number1, ' ) + b(', this.state.number2, ')= ', c)
        
        this.setState({
            answer: c
        });
    };
    subNumbers =() =>{
        var c;
        this.setState({number1:Number(document.getElementById("number1").value)});
        this.setState({number2:Number(document.getElementById("number2").value)});
   
        c = this.state.number1 - this.state.number2
        console.log('a(', this.state.number1, ' ) - b(', this.state.number2, ')= ', c)
        
        this.setState({
            answer: c
        });
    };
    mutliNumbers =() =>{
        var c;
        this.setState({number1:Number(document.getElementById("number1").value)});
        this.setState({number2:Number(document.getElementById("number2").value)});
   
        c = this.state.number1 * this.state.number2
        console.log('a(', this.state.number1, ' ) * b(', this.state.number2, ')= ', c)
        
        this.setState({
            answer: c
        });
    };
    divideNumbers =() =>{
        var c;
        this.setState({number1:Number(document.getElementById("number1").value)});
        this.setState({number2:Number(document.getElementById("number2").value)});
   
        c = this.state.number1 / this.state.number2
        console.log('a(', this.state.number1, ' ) / b(', this.state.number2, ')= ', c)
        
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
            <input type="number" id="number1" value={this.state.number1} onChange={this.handleChange} ></input>
            <p></p>
            <label>Second Number: </label>
            <input type="number" id="number2" value={this.state.number2} onChange={this.handleChange}></input>
            <p></p>
            <button type="button" id ="buttonAdd"  onClick={this.addNumbers}>Add</button>
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




export default MyCalculator;