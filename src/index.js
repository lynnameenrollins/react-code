import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TodoComponent} from './component/ToDoComponent';
import MyFuncComponent from './component/MyFuncComponent';
import NewClassComponent from './component/NewClassComponent';
import MyCalculator from './component/MyCalculator';
import Demo from './component/Demo';
import EffectHookExample from './component/EffectHookExample';
import EffectNew from './component/EffectNew.js';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    {/* <App></App> */}
    {/* <NewClassComponent/>
    <TodoComponent name = 'Carol' />
    <MyFuncComponent name = 'Mike' age = {27}/> */}
    <MyCalculator />
    <Demo/>
    <EffectHookExample/>
    <EffectNew/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
