import factory from './actionCreatorFactory';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes';

export const addTodo = factory(ADD_TODO, 'todoText');
export const deleteTodo = factory(DELETE_TODO, 'id');
export const completeTodo = factory(COMPLETE_TODO, 'id');
