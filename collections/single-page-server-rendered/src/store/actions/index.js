import EasyActions from 'redux-easy-actions';

const { Actions, Constants } = EasyActions({
  ADD_TODO: (type, todoText) => ({ type, todoText }),
  COMPLETE_TODO: (type, id) => ({ type, id }),
  DELETE_TODO: (type, id) => ({ type, id }),
  SET_FILTER: (type, value) => ({ type, value }),
});

export { Actions, Constants };
