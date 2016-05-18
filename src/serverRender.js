'use strict';

import {cloneElement} from 'React';
import ReactDOMServer from 'react-dom/server';

import config from '../webpack/webpack.config.js';

export default (ReactElement, state) => (req, res) => {
  const el = cloneElement(ReactElement, {...state});

  const template = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="${config.metaTags.description}">
      <link href="/bundle.css" rel="stylesheet">
      <title>${config.metaTags.title}</title>
    </head>
    <body>
      <div id="root">${ReactDOMServer.renderToString(el)}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(state)};
      </script>
      <script src="/bundle.js"></script>
    </body>
  </html>`;

  res.send(template);
};
