// Create router
const express = require('express');
const wikiRouter = express.Router();
const addPage = require('../views/addPage');


wikiRouter.get('/', (req, res, next) => {
  res.send('got to GET /wiki/')
});

wikiRouter.post('/', (req, res, next) => {
  res.send('got to POST /wiki/')
});


wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});



// Export router
module.exports = wikiRouter;
