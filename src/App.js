import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
import StyledDemo from './component/StyledDemo';
import CommonStyles from './component/CommonStyles';
import Component1 from './component/Component1';
import UseRefDemo from './component/UseRefDemo';
import Component1Context from './component/Component1Context';
// import Component1Context from './component/Component1Context';
function App() {
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
        <h1> Hello world from React</h1>
        <div>
          {/* This demo is inheriting the css of App as well!! */}
        <Demo/>
        <StyledDemo/>
        <CommonStyles/>
        <p>Example of Use Reference</p>
        <UseRefDemo />
        
        <Component1 />
        
        <Component1Context/>
        
        </div>
    </div>
  );
}

export default App;
