import React from 'react';
import TodoHeader from '../TodoHeader';
import TodoList from '../TodoList';

const Main = (props) => (
  <div>
    <h1>Todos</h1>
    <TodoHeader />
    <TodoList todos={props.todos} />
  </div>
);

export default Main;