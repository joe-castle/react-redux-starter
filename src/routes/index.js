'use strict';

import express from 'express';
import serverRender from '../server-render';

const app = express();

app.use(express.static(`${__dirname}/../assets`));
app.use(serverRender);

export default app;
