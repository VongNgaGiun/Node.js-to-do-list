//tutorial source: https://www.youtube.com/watch?v=edOmvng5IQc&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=31&ab_channel=TheNetNinja
//app.js is the entry point for our application, so it's going to fire when the application first starts
var express = require('express'); //require the express module
var todoController = require('./controllers/todoController'); //require the todoController module/controller

var app = express(); //get access to all different methods on express

//set up template engine
app.set('view engine', 'ejs'); //tell express that we want to use gjs as our view engine or a template engine

//static files
app.use(express.static('./public')); //serve up our static file

//fire controllers
todoController(app);

//listen to port
app.listen(3000); //listening to port 3000
console.log('you are listening to port 3000');
