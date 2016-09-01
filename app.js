var express = require('express');
var _ = require('underscore');
var ENV_SLEEP_SECONDS = process.env.ENV_SLEEP_SECONDS || 15;
var app = express();

app.get('/', function(req, res) {
  console.log("start");
  var sleepTime = ENV_SLEEP_SECOND*1000;
  setTimeout(function(){
    console.log("Sleeping for " + sleepTime);
    res.status(200).send('Hello from the container').end();
  },sleepTime);
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
