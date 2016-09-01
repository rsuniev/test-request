var express = require('express');
var _ = require('underscore');
var ENV_SLEEP_SECONDS = process.env.ENV_SLEEP_SECONDS || 15;
var app = express();

app.get('/', function(req, res) {
  console.log("Sleeping for " + ENV_SLEEP_SECONDS + " seconds");
  var waitTill = new Date(new Date().getTime() + ENV_SLEEP_SECONDS * 1000);
  while(waitTill > new Date()){}
  console.log("Finished waiting");
  res.send("Hello from the container");
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
