import React from 'react';
import { createStore } from 'redux';

import express from 'express';
const app = express();

import serverRender from '../serverRender';
import rootReducer from '../reducers';

import App from '../components/App';

// Uses redux to set default state for
// values not defined in initialState object.
const state = createStore(rootReducer, { counter: 5 }).getState();

app.use('/assets', express.static(`${__dirname}/../assets`));

app.get('*', serverRender(<App {...state} />, state));

export default app;
