import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { findDOMNode } from 'react-dom';
import TodoHeader from '../src/components/TodoHeader';

describe('Simulate Event', () => {
  it('When click the button, it will be toggle', () => {
    const TodoHeaderApp = TestUtils.renderIntoDocument(<TodoHeader />);
    const TodoHeaderDOM = findDOMNode(TodoHeaderApp);
    const button = TodoHeaderDOM.querySelector('button');
    TestUtils.Simulate.click(button);
    let todoHeaderButtonAfterClick = TodoHeaderDOM.querySelector('button').disabled;
    expect(todoHeaderButtonAfterClick).to.equal(true);
  });
});