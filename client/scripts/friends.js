// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  initialize: function() {
    $('.username').on('click', Friends.toggleStatus);
  },
  // {
  //   david: true,
  //   gene: true,
  //   miras: false
  // }

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus: function(event) {
    var username = event.currentTarget.innerText;

    // go into _data
    // change friend status to opposite
    if (Friends._data[username] === false) {
      Friends._data[username] = true;
    } else {
      Friends._data[username] = false;
    }
    FormView.update();

  },

  //auto adds all users into _data = false
  // if user is already in data set, then do not add that user again
  add: function (data) {
    for (var i = 0; i < data.length; i++) {
      if (!Friends._data[data[i].username]) {
        Friends._data[data[i].username] = false;
      }
    }
  }
};