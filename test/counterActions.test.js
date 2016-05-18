import {expect} from 'chai';

import * as actions from '../src/actions/counterActions';

describe('Counter Actions', () => {
  it('Creates an increment action', () => {
    expect(actions.incrementCounter()).to.deep.equal(
      {type: 'INCREMENT_COUNTER'}
    );
  });
  it('Creates a decrement action', () => {
    expect(actions.decrementCounter()).to.deep.equal(
      {type: 'DECREMENT_COUNTER'}
    );
  });
});
