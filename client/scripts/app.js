// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    Friends.initialize();


    // Our refresh  method
    // MessagesView.refresh(data, Messages._data[0].message_id);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.add(data);
      // MessagesView.render(data);
      callback();
      Rooms.addRoom(data);

      Friends.add(data);

      var roomData = Rooms._data.null;
      if ($('select').val() !== undefined) {
        var roomData = Rooms._data[$('select').val()];
        var room = $('select').val();
      }

      $(chats).empty();
      MessagesView.render(roomData);
      RoomsView.render();
      if ( roomData === Rooms._data.null) {
        $('select').val('null');
      } else {
        $('select').val(room);
      }
      $('.username').on('click', Friends.toggleStatus);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
