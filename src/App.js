import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
import StyledDemo from './component/StyledDemo';
import CommonStyles from './component/CommonStyles';
import Component1 from './component/Component1';
import UseRefDemo from './component/UseRefDemo';
import Component1Context from './component/Component1Context';
import FirstComponent from './component/FirstComponent';
import ParentToChild from './component/ParentToChild';
import Child2 from './component/Child2';
import Child1 from './component/Child1';
import {useState} from 'react'
import TwoWayBind from './component/TwoWayBind';
import Form from './component/Form';
import DisplayForm from './component/DisplayForm';
// import Component1Context from './component/Component1Context';
function App() {
  // const [selectedMessage, setMessage] = useState('')
  const [setInfo, displayInfo] = useState('')
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React! It is fun!!
        </a> */}
        <div>
          <h1>Please fill out the Form and Submit when Finished</h1>
          {/* This demo is inheriting the css of App as well!! */}
        {/* <Demo/>
        <StyledDemo/>
        <CommonStyles/>
        <p>Example of Use Reference</p>
        <UseRefDemo />
        
        <Component1 />
        
        <Component1Context/> */}
        {/* <FirstComponent/>
        <ParentToChild/> */}
        {/* <Child2 selectedMessage = {selectedMessage} />
        <Child1 setMessage = {setMessage}/> */}
        {/* <TwoWayBind/> */}
        <Form/>
          
        
        </div>
    </div>
  );
}

export default App;
