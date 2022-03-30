// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // var data = Parse.readAll();
    // console.log('data ' + data);
    for (var i = 0; i < data.length; i++) {
      MessagesView.renderMessage(data[i]);
    }
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(message) {
    // var divmessage = $('<div>' + message + '<div/>');
    // TODO: Render a single message.
    var divmessage = MessageView.render(message);
    this.$chats.append(divmessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};