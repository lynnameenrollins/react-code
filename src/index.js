import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TodoComponent} from './component/ToDoComponent';
import MyFuncComponent from './component/MyFuncComponent';
import NewClassComponent from './component/NewClassComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    <TodoComponent name = 'Carol' />
    <MyFuncComponent name = 'Mike' age = {27}/>
    <NewClassComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
