import React from "react";

class TodoComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            id: 1,
            value:"test"
        }
    }
    render(){
        return(
            <div>
            <h1>Class Component demo</h1>
            <p> Hello {this.props.name} !</p>
            <p> Id is {this.state.id} and the value is: {this.state.value}.</p>
            
            <button type="button" onClick ={clickedButton} > Click me</button>
            
            </div>
        )
    }
}

function clickedButton(){
    console.log("The button has been clicked");
   
   
}
export {TodoComponent};