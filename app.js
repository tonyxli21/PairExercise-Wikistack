const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');
const app = express();
const Sequelize = require('sequelize');


app.use(morgan('dev'));

// Gives information on where to look for the static files
app.use(express.static(__dirname + "/public"));

// Parses information from an HTTP response
app.use(express.urlencoded({ extended: false }));

// Check PSQL connection
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

// Creates GET request
app.get('/', (req, res, next) => {
  // res.send("hello world");
  res.send(layout(''));
});

const PORT = 3000;
const init = async () => {
  await db.sync( {force:true} );
  app.listen(PORT, () => {
    console.log(`Server is listning on port ${PORT}!`)
  })
}

init();
