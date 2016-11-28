import { expect } from 'chai';

import factory from './actionCreatorFactory';

describe('Action Creator Facotry', () => {
  it('Returns an action creater with type and keys', () => {
    expect(factory('TEST_TYPE', 'name', 'age')).to.be.a('function');
    expect(factory('TEST_TYPE2')).to.be.a('function');
  });

  it('Returns an action creator, when called returns an action object.', () => {
    const testType = factory('TEST_TYPE', 'name', 'age');

    expect(testType('bob', 25)).to.deep.equal({
      type: 'TEST_TYPE',
      name: 'bob',
      age: 25,
    });
  });
});
