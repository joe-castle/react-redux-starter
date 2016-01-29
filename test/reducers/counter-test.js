import { expect } from 'chai';

import * as types from '../../../src/frontend/actions/action-types';
import counter from '../../../src/frontend/reducers/counter';

describe('Counter Reducer', () => {
  it('Returns the initial state', () => {
    expect(counter(undefined, {})).to.equal(0);
  });
  it('Increments the counter by 1', () => {
    expect(
      counter(0, {type: types.INCREMENT_VALUE}))
        .to.equal(1);
  })
  it('Decrements the counter by 1', () => {
    expect(
      counter(0, {type: types.DECREMENT_VALUE}))
        .to.equal(-1);
  })
});
