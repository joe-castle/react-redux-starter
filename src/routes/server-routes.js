import React from 'react';
import express from 'express';

import render from '../server-render';

const app = express();

app.use('/assets', express.static(`${__dirname}/../assets`));

app.get('*', render);

export default app;
