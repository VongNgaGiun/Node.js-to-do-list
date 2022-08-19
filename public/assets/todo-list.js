//when the document is ready, we're going to fire a function
$(document).ready(function () {
  //when we have a submit event on the form, we're going to fire a function
  $('form').on('submit', function () {
    //create variables
    var item = $('form input');
    var todo = { item: item.val() };

    //adding new items to this todo list
    //make a ajax request to the server
    $.ajax({
      //post request
      type: 'POST',
      //doing the post request to this route
      url: '/todo',
      //access data
      data: todo,
      //grab the updated data after the data has been added to the array, then reload the page so the data is output in the ejs
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });

    return false;
  });

  //delete request
  $('li').on('click', function () {
    var item = $(this).text().replace(/ /g, '-');
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });
});
