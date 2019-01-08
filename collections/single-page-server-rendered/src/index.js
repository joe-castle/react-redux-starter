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
