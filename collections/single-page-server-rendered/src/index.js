import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import './assets/css/main.styl'

import configureStore from './store/configureStore'

import App from './components/App'

const store = configureStore(window.INITIAL_STATE)

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default

    ReactDOM.render(
      <AppContainer>`
        <Provider store={store}>
          <NewApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
