// API From
// https://jsonplaceholder.typicode.com/photos

var express = require('express');
var app = express();
var port = 4000;
var mongoose = require('mongoose');
var Users = require('./models/models');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/snapup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
    console.log('db connected');
});  

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app);
app.listen(port);

console.log('todo list restful api server started on: ' + port);
