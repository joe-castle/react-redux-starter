import actionFactory, * as types from './action-types';

export const decrementValue = actionFactory(types.DECREMENT_COUNTER);
export const incrementValue = actionFactory(types.INCREMENT_COUNTER);
