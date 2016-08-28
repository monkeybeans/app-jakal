var express = require('express');
var app = express();

var PORT = 3000;

app.use('/assets', express.static(__dirname + '/web/assets'));

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/web/index.html');
});

app.listen(3000, function () {
  console.log('Time: ' + new Date().toString());
  console.log('Starting server on port: ' + PORT);
});
