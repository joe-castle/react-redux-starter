'use strict';

import React from 'React';
import {createStore} from 'redux';

import express from 'express';
const app = express();

import serverRender from '../serverRender';
import rootReducer from '../reducers';

import App from '../components/App';

// Uses redux to set default state for
// values undefined in initialState object.
const state = createStore(rootReducer, {counter: 5}).getState();

app.use(express.static(`${__dirname}/../assets`));

app.get('*', serverRender(<App />, state));

export default app;
