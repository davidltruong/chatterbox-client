// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('.update').on('click', FormView.update);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    $message = $('#message')[0].value;
    var selectedRoom = $( '.select' ).val();
    var message = {
      username: App.username,
      text: $('#message')[0].value,
      roomname: selectedRoom
    };
    Parse.create(message);
    FormView.update();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  update: function (event) {
    $(chats).empty();
    App.fetch();
  },

  addRoom: function (event) {
    var newRoom = $('.newRoom').val();

  }
};