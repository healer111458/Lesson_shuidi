import React from 'react';
import ReactDOM from 'react-dom';
//react  框架
//reactDOM  组件渲染
import './index.css';
//App  组件
import App from './App';
//serviceWorker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
