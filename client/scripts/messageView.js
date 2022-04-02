// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(
    "<div>" +
      "<div class='username' " + "<%= username %>" + ">" +
        "<h4>" + "<%= username %>" + "</h4>" +
      "</div>" +
      "<div class='text'>" +
        "<p>" + "<%= text %>" + "</p>" +
      "</div>" +
    "</div>"
  ),

  renderFriend: _.template(
    "<div>" +
      "<div class='username friend' " + "<%= username %>" + ">" +
        "<h4>" + "<%= username %>" + "</h4>" +
      "</div>" +
      "<div class='text friend'>" +
        "<p>" + "<%= text %>" + "</p>" +
      "</div>" +
    "</div>"
  )

};
/*
<div class='username'>
  <h1>username1</h1>
</div>
<div class='message'>
  <p>this is the message</p>
</div>
*/