import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers/root-reducer';
import DevTools from '../containers/dev-tools';

const finalCreateStore = compose(
  // Middleware you want to use in development:
  // applyMiddleware(),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

module.exports = (initialState) => {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers/root-reducer', () =>
      store.replaceReducer(require('../reducers/root-reducer')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
