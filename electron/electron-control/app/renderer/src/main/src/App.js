import React from 'react';
import logo from './logo.svg';
import './App.css';
// electron调用 NativeAPI  属于多进程架构
// IPC - Inter-Process Communnicaation,进程间通信
import {ipcRenderer} from 'electron';  //去到IPC

// electron 不支持import调用
// create-react-app 0配置启动项   解决方案：reject 重配置

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
