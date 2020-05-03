// test add.js
import add from '../src/modules/add';
import { expect } from 'chai';

// describe is test suite, it is test case
describe('test add function', () => (
  it('1 + 1 = 2', () => (
    expect(add(1, 1)).to.be.equal(2)
  ))
));