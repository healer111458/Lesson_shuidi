import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { render } from 'enzyme';
import Main from '../../src/components/Main';

describe('Enzyme Staic Rendering', () => {
  it('Main title should be Todos', () => {
    const todos = [{ id: 0, text: 'reading'}, { id: 1, text: 'coding'}];
    const main = render(<Main todos={todos} />);
    expect(main.find('h1').text()).to.equal('Todos');
  });
});