import './assets/sass/main.scss';

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const store = configureStore(window.INITIAL_STATE);

store.subscribe(() => {
  render(
    <App
      dispatch={store.dispatch}
      {...store.getState()}
    />,
    document.getElementById('root')
  );
});

// Initialises the render method on load.
store.dispatch({ type: '@@init' });
