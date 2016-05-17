import * as types from '../actions/action-types';

export default (state = 0, {
  type
}) => {
  switch (type) {
    case types.INCREMENT_COUNTER: return state + 1;
    case types.DECREMENT_COUNTER: return state - 1;
    default: return state;
  }
};
