import { createStore } from 'redux';

import rootReducer from '../reducers';

module.exports = initialState => {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
};
