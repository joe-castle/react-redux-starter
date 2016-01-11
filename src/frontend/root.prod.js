import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/app';

const store = configureStore();

module.exports = () => (
	<Provider store={store}>
    <App />
	</Provider>
);
