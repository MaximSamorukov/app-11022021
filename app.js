const express = require('express');
const pug = require('pug');
const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:5500',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
  });
  next();
})

app.get('/first', (req, res) => {
  const firstPage = pug.renderFile('./pages/first_page.pug');
  res.status(200).send(firstPage).end();
})

app.get('/second', (req, res) => {
  const secondPage = pug.renderFile('./pages/second_page.pug');
  res.status(200).send(secondPage).end();
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})