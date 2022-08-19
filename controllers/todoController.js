//adding the body-parser module so we can access the data that sent to us on the post request
var bodyParser = require('body-parser');

//create some dummy data
var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'coding' }];

// add a middleware to pass our data and store that in a variable
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//creates a controller for our to-do list, so we can handle the routes, and the rendering of views, and passing of data to views in this controller for the to-do list
module.exports = function (app) {
  //set up route or passing data to the view
  app.get('/todo', function (req, res) {
    res.render('todo', { todos: data }); //pass the data object through to the view
  });

  //add new items to the list
  //fire the middleware urlencodedParser whenever the request is made
  //when we hit a submit button, it's going to make a post request to url '/todo'. when that happens, we're going to handle that post request here (app.js) and we're going to use this middleware (urlencodedParser) which is going to fire and it's going to pass the data which we post to the server. then we can access the request object
  app.post('/todo', urlencodedParser, function (req, res) {
    //grab and push the data to the array
    data.push(req.body);
    //send data back to the front-end
    res.render('todo', { todos: data });
  });

  //delete items of the list
  //add url parameter, so now we can access which item on the url that we are trying to delete
  app.delete('/todo/:item', function (req, res) {
    data = data.filter(function (todo) {
      //1.using filter method, and then firing a function and cycling through the object global 2.replace any spaces with hyphens globally
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.render('todo', { todos: data });
  });
};
