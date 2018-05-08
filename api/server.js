const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const movieRoutes = require('./routes/movieRoutes.js');
const genreRoutes = require('./routes/genreRoutes.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev')); //common, tiny (diferentes formatos)

app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);

app.get('/api', (req, res, next) => {
  res.status(200).json({
    message: 'You requested index page',
  });
});

// catch 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  const error = err;
  const status = err.status || 500;

  res.status(status).json({
    message: error.message,
  });
});

app.get('/', (req, res) => res.send('Hello World!!'));

app.listen(4000, () =>
  console.log('listening on port ' + 4000)
);
