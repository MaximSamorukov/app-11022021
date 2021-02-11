const express = require('express');
const bodyParser = require("body-parser");
const pug = require('pug');
const jwt = require('jsonwebtoken');
const users = require('../db/users');
const getUser = require('../db/db-functions');
const constants = require('../service/constants');
const app = express();
const { port, secret } = constants;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
  });
  next();
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const data = { page: 'login' };
  const loginPage = pug.renderFile('../pages/template.pug', data);
  res.status(200).send(loginPage).end();
})

app.post('/', async (req, res) => {
  const { name, password } = req.body;
  const user = getUser({ name, password })[0];
  if (!user) {
    res.status(404).send('You are not!!!').end();
  } else {
    const { username, nickname, template, id, subject, tags } = user;
    const token = jwt.sign({ username, nickname, template, id, subject, tags }, secret, { expiresIn: 600000, algorithm: 'HS256' });
    res.status(200).send(token).end();
  }
})
app.use((req, res, next) => {
  const { token } = req.body;
  if (!token) {
    res.end();
  } else {
    const decoded = jwt.verify(token, secret);
    next()
  }
})
app.post('/first', (req, res) => {
  const data = { page: 'first' };
  const firstPage = pug.renderFile('../pages/template.pug', data);
  res.status(200).send(firstPage).end();
})

app.post('/second', (req, res) => {
  const { token } = req.body;
  const data = { page: 'second', token };
  const secondPage = pug.renderFile('../pages/template.pug', data);
  res.status(200).send(secondPage).end();
})

app.post('/third', (req, res) => {
  const data = { page: 'third' };
  const thirdPage = pug.renderFile('../pages/template.pug', data);
  res.status(200).send(thirdPage).end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
