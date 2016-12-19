import { expect } from 'chai';

import { addTodo, deleteTodo, completeTodo } from './todos';

describe('Todo Actions', () => {
  it('Creates an add todo action', () => {
    expect(addTodo('Wash Dishes')).to.deep.equal({
      type: 'ADD_TODO',
      todoText: 'Wash Dishes',
    });
  });
  it('Creates a delete todo action', () => {
    expect(deleteTodo('test_id')).to.deep.equal({
      type: 'DELETE_TODO',
      id: 'test_id',
    });
  });
  it('Creates a complete todo action', () => {
    expect(completeTodo('test_id')).to.deep.equal({
      type: 'COMPLETE_TODO',
      id: 'test_id',
    });
  });
});
