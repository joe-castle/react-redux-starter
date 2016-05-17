'use strict';

import React from 'React';
import ReactDOMServer from 'react-dom/server';
import {createStore} from 'redux';

import config from '../package.json';
import rootReducer from './reducers';

import App from './components/app';

const state = createStore(rootReducer, {counter: 5}).getState();

const template = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${config.description}">
    <link href="/bundle.css" rel="stylesheet">
    <title>${config.name}</title>
  </head>
  <body>
    <div id="root">${ReactDOMServer.renderToString(<App {...state}/>)}</div>
    <script>
      __INITIAL_STATE__ = ${JSON.stringify(state)};
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>`;

export default (req, res) => res.send(template);
