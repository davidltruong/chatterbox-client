// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add: function (data) {
    Messages._data = data;
    // console.log('messages.data ' + JSON.stringify(Messages._data));
  },
  chatroom: function (chatroom) {
    // create an empty array
    // loop through _data
    // add only messages that have that chatroom to empty array
    // return empty array

  }
};
