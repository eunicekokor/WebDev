var express = require('express');
var fs = require('fs');
var app = express();

app.listen(8080, function() {
  console.log("I'm listening now");
});

// app.use(bodyParser.urlEncoded());

var router = new express.Router();

router.get('/abc', function(req, res) {
  res.send("Got here");
});

// app.use('/euni', router);

// req.params
// https:twitter.com/:user_id/status/:tweet_number

app.get('/multiply/:number', function(req, res) {
  var result = req.params.number *2;
  res.json(result);
});

// Query String
app.get('/multi', function(req, res) {
  var result = req.query.num * req.query.multiplicand;
  res.json(result);
});

app.post('/test_route', function(req, res) {
  res.send('<p> lalala you just posted something!</p>');
});

app.get('/test.html', function(req, res) {
  fs.readFile('test.html', function(err, data) {
    res.send(data.toString());
  });
});

app.get('/testing', function(req, res, next) {
  console.log("Handling it- Olivia Pope status");
  console.log("Middlewear status");
  next();
});

app.get('/testing', function(req, res) {
  console.log("Wow that's cool I'm here now!");
  res.send("here!!");
});

app.get('/test_route', function(request, response) {
  console.log('Request: ', Object.keys(request));
  console.log('Response: ', Object.keys(response));
  response.send('<h1> Hello World!</h1><h2>Welcome to Euni<i>code</i></h2>');
});
