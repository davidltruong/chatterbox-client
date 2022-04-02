// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'), // Add room button
  $select: $('#rooms select'), // Choosing which room to enter

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    $('.select').on('change', RoomsView.handleChange);
    $('#rooms').on('click', Rooms.add);
  },

  render: function() {
    var roomlist = Object.keys(Rooms._data);
    $('.select').empty();
    for (var i = 0; i < roomlist.length; i++) {
      RoomsView.renderRoom(roomlist[i]);
    }
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    var divRoom = $('<option value=' + roomname + '>' + roomname + '</option>');
    // TODO: Render a single message.
    RoomsView.$select.append(divRoom);
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    var selectedRoom = $( '.select' ).val();
    var roomdata = Rooms._data[selectedRoom];
    $(chats).empty();
    App.fetch();
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    console.log('click');
    var newRoom = $('.newRoom').val();
    var dummyMsg = {
      username: App.username,
      text: App.username + ' created a new room called ' + newRoom,
      roomname: newRoom
    };
    RoomsView.renderRoom(newRoom);
    $('select').val(newRoom);
    $(chats).empty();
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
