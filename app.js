const express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;


const app = express(),
    strains = require('./strains');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
				res.send('This is the index page.')
});

app.get('/strains', (req, res) => {
				console.log('it works??');
    res.json({
        strains
    })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
  });
});

app.listen(port, () =>{
    console.log(`running on port ${port}`);
})

module.exports = app;
