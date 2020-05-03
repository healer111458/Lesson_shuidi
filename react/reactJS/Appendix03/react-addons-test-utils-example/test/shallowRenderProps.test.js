import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import TodoList from '../src/components/TodoList';

const shallowRender = (Component, props) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props}/>);
  return renderer.getRenderOutput();
}

describe('Shallow Props Rendering', () => {
  it('TodoList props check', () => {
    const todos = [{ id: 0, text: 'reading'}, { id: 1, text: 'coding'}];
    const todoList = shallowRender(TodoList, {todos: todos});
    expect(todoList.props.children.type).to.equal('ul');
    expect(todoList.props.children.props.children[0].props.children).to.equal('reading');
    expect(todoList.props.children.props.children[1].props.children).to.equal('coding');
  });
});