import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { findDOMNode } from 'react-dom';
import { mount } from 'enzyme';
import TodoHeader from '../../src/components/TodoHeader';

describe('Enzyme Mount', () => {
  it('Click Button', () => {
    let todoHeaderDOM = mount(<TodoHeader />);
    let button = todoHeaderDOM.find('button').at(0);
    button.simulate('click');
    expect(button.prop('disabled')).to.equal(true);
  });
});