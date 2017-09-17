"use strict"
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/game.html',function(req,res){
  res.sendFile('game.html');
});

app.get('/',function(req,res){
  res.sendFile('index.html');
});

//port for heroku
let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
