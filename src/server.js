import app from './routes/server-routes';

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log('Express server listening on port:', port)
);
