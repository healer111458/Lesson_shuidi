import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Main from '../../src/components/Main';

describe('Enzyme Shallow Rendering', () => {
  it('Main title should be Todos', () => {
    const main = shallow(<Main />);
    expect(main.find('h1').text()).to.equal('Todos');
  });
});