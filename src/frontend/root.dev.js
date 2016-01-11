import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/app';

import DevTools from './containers/dev-tools';

const store = configureStore();

module.exports = () => (
	<Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
	</Provider>
);
