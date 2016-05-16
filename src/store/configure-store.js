import {createStore} from 'redux';

import rootReducer from '../reducers';

if (process.env.NODE_ENV === 'production') {
  module.exports = (initialState) =>
    createStore(rootReducer, initialState,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
} else {
  module.exports = (initialState) => {
    const store = createStore(rootReducer, initialState,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    if (module.hot) {
      module.hot.accept('../reducers', () =>
        store.replaceReducer(rootReducer)
      );
    }

    return store;
  }
}
