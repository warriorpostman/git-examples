'use strict';

var express = require('express');
var app = express();
var service = require('./services/get-data');

app.get('/data', function (req, res) {
  res.send(service.getData());
});

// Add a comment to describe this route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Add a comment to describe this route
app.get('/some-crazy-route', function (req, res) {
  res.send('This route is crazy');
});


app.get('/data/fish', function (req, res) {
  res.send(service.getBetterData(true, false));
});

app.get('/data/one-word', function (req, res) {
  res.send(service.getBetterData(false, true));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
