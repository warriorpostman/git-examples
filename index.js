var express = require('express');
var app = express();
var jwt = require('express-jwt');

var service = require('./services/get-data');

app.get('/data', function (req, res) {
  res.send(service.getData());
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/secure', 
  jwt({ 
    secret: 'BESURETODRINKYOUROVALTINE' 
  }),
  function (req, res) {
  // TODO:
  // Hmm, look for something that indicates
  // a client should be allowed to use this service, 
  // I think ?
  res.send('Secure: Hello World!');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
