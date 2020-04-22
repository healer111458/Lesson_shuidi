// console.log('dfsdf');
// var a = 1
// document.body.innerHTML = a
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// react 组件分为很多种  容器型组件  redux 
import GameContainer from './containers/GameContainer'

ReactDOM.render(
  <GameContainer/>,
  document.getElementById('game')
)
