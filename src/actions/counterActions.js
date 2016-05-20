import * as types from './actionTypes';
import factory from './actionCreatorFactory';

export const decrementCounter = factory(types.DECREMENT_COUNTER);
export const incrementCounter = factory(types.INCREMENT_COUNTER);
