'use strict';

import express from 'express';
import serverRender from '../server-render';

const app = express();

app.use(express.static(`${__dirname}/../../build`));
app.use(serverRender);

export default app;
