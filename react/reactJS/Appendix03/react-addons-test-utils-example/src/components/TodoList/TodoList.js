import React from 'react';

const TodoList = (props) => (
  <div>
    <ul>
      {
        props.todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))
      }
    </ul>
  </div>
);

export default TodoList;