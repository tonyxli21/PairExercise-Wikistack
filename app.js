const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');

const app = express();
app.use(morgan('dev'));

// Gives information on where to look for the static files
app.use(express.static(__dirname + "/public"));

// Parses information from an HTTP response
app.use(express.urlencoded({ extended: false }));

// Creates GET request
app.get('/', (req, res, next) => {
  // res.send("hello world");
  res.send(layout(''));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
