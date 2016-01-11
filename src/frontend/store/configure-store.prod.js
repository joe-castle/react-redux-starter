import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers/root-reducer';

const finalCreateStore = compose(
  // insert middleware - applyMiddleware()
)(createStore);

module.exports = (initialState) => (
  finalCreateStore(rootReducer, initialState)
);
