// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // Add room button
  $select: $('#rooms select'), // Choosing which room to enter

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    $('.select').on('change', RoomsView.handleChange);
  },

  render: function() {
    console.log('render');
    var roomlist = Object.keys(Rooms._data);
    console.log(roomlist);
    for (var i = 0; i < roomlist.length; i++) {
      RoomsView.renderRoom(roomlist[i]);
    }
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    console.log('renderRoom');
    var divRoom = $('<option value=' + roomname + '>' + roomname + '</option>');
    // TODO: Render a single message.
    RoomsView.$select.append(divRoom);
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    var selectedRoom = $( '.select' ).val();
    var roomdata = Rooms._data[selectedRoom];
    $(chats).empty();
    MessagesView.render(roomdata);
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
