import { expect } from 'chai'

import { Actions } from './index'

describe('Todo Actions', () => {
  it('Creates an add todo action', () => {
    expect(Actions.ADD_TODO('Wash Dishes')).to.deep.equal({
      type: 'ADD_TODO',
      todoText: 'Wash Dishes'
    })
  })
  it('Creates a delete todo action', () => {
    expect(Actions.DELETE_TODO('test_id')).to.deep.equal({
      type: 'DELETE_TODO',
      id: 'test_id'
    })
  })
  it('Creates a complete todo action', () => {
    expect(Actions.COMPLETE_TODO('test_id')).to.deep.equal({
      type: 'COMPLETE_TODO',
      id: 'test_id'
    })
  })
})

describe('Filter Actions', () => {
  it('Creates an action with filter set to "All"', () => {
    expect(Actions.SET_FILTER('All')).to.deep.equal({
      type: 'SET_FILTER',
      value: 'All'
    })
  })
})
