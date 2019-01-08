import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers'

export default (initialState) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(/* MIDDLEWARE GOES HERE */),
    window.devToolsExtension && module.hot
      ? window.devToolsExtension()
      : f => f
  ))

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    )
  }

  return store
}
