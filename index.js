'use strict';

var express = require('express');
var app = express();
var service = require('./services/get-data');

app.get('/data', function (req, res) {
  res.send(service.getData());
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/some-crazy-route', function (req, res) {
  response.send('This route is crazy');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
