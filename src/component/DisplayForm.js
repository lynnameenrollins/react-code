import React from 'react';


function DisplayForm({data}) {
//    const data = "This display is the child of the Form Parent"
    return (
        <div>
            
         <h1> First Name:  {data.fn}</h1>   
         <h1> Last Name:  {data.ln}</h1>   
         <h1> Age:  {data.age}</h1>   
         <h1> Address:  {data.adr}</h1> 
           
         <h1> Hobbies:</h1>
         <h1>{data.hobby}</h1>
         
        </div>
    );
}

export default DisplayForm;
