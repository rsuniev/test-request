var express = require('express');
var _ = require('underscore');
var ENV_SLEEP_SECONDS = process.env.ENV_SLEEP_SECONDS || 15;
var app = express();

app.get('/', function(req, res) {
  setTimeout(function(){
    console.log("Sleeping for " + ENV_SLEEP_SECONDS + " seconds");
    res.status(200).send('Hello from the container').end();
  },ENV_SLEEP_SECOND * 1000);
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
