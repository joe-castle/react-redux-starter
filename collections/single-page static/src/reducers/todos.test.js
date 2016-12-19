import { expect } from 'chai';
import { isValid } from 'shortid';

import todos from './todos';

describe('Todos Reducer', () => {
  it('Returns the initial state', () => {
    expect(todos(undefined, {})).to.be.a('array');
  });
  it('Adds a todo', () => {
    const todo = todos([], { type: 'ADD_TODO', todoText: 'Wash Dishes' })[0];

    expect(todo.todoText).to.equal('Wash Dishes');
    expect(todo.complete).to.equal(false);
    expect(isValid(todo.id)).to.equal(true);
  });
  it('Deletes a todo', () => {
    const initialState = [{
      todoText: 'Wash Dishes',
      complete: false,
      id: 'test_id',
    }];
    expect(todos(initialState, { type: 'DELETE_TODO', id: 'test_id' })).to.deep.equal([]);
  });
  it('Completes a todo', () => {
    const initialState = [{
      todoText: 'Wash Dishes',
      complete: false,
      id: 'test_id',
    }];
    expect(todos(initialState, { type: 'COMPLETE_TODO', id: 'test_id' })).to.deep.equal([{
      todoText: 'Wash Dishes',
      complete: true,
      id: 'test_id',
    }]);
  });
});
