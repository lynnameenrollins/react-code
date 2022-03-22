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
import DynamicContent from './component/DynamicContent';
import NumberList from './component/NumberList';
//to use react-router-dom
import{BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';
import Error from './component/Error';
import Redirect from './component/Redirect';
import Success from './component/Success'
import Failure from './component/Failure';


// import Component1Context from './component/Component1Context';
function App() {
  // const [selectedMessage, setMessage] = useState('')
  const [setInfo, displayInfo] = useState('')
  const [user,changeUser] = useState('userA');
  const numbers = [1,2,3,4,5];
 
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
          {/* <h1>Please fill out the Form and Submit when Finished</h1> */}
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
        
        {/* <DynamicContent user = {user}/>
        <button onClick={() => changeUser("userA")}>Switch to User A</button> 
        <button onClick={() => changeUser("userB")}>Switch to User B</button>  */}

        {/* <NumberList numbers = {numbers}/> */}

        {/* whatever I put in here will become my link to take me to a different page   */}
        {/* This makes it the landing page */}
        <Router>
          {/* <nav>
            <ul>
            
                <li><Link to = "/home">Home Page</Link></li>
                <li><Link to = "/about">About Page</Link></li>
                <li><Link to = "/profile">Profile Page</Link></li>
            </ul>
          </nav> */}
                 
        <Routes>
          <Route path ="/home" element= {<Home/>}></Route>
          <Route path ="/about" element= {<About />}></Route>
          <Route path ="/profile" element= {<Profile />}></Route>
          <Route path ="/success" element= {<Success />}></Route>
          <Route path ="/failure" element= {<Failure />}></Route>
          <Route path ="*" element= {<Error />}></Route>
        </Routes>
        
        </Router> 

        {/* <Form/> */}
        </div>
    </div>
  );
}

export default App;
