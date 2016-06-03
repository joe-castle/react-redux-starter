import React from 'react';
import { createStore } from 'redux';
import express from 'express';

import serverRender from '../serverRender';
import rootReducer from '../reducers';

import App from '../components/App';

const app = express();

// Uses redux to set default state for
// values not defined in initialState object.
const state = createStore(rootReducer).getState();

app.use('/assets', express.static(`${__dirname}/../assets`));

app.get('*', serverRender(<App {...state} />, state));

export default app;
