import { expect } from 'chai';

import filter from './filter';

describe('Filter Reducer', () => {
  it('Returns the initial state', () => {
    expect(filter(undefined, {})).to.equal('All');
  });

  it('Set Filter', () => {
    expect(filter('All', { type: 'SET_FILTER', value: 'Completed' })).to.equal('Completed');
  });
});
