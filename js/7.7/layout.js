// 模块化
// diff算法的key
// eg:
    // key的值
import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    list: [
      { value: 0 },
      { value: 1 },
      { value: 2 }
    ]
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((e, i) => {
          return <li key={i}>
            <input  value={e.value}/>
            </li>;
        })}
      </div>
    );
  }
}