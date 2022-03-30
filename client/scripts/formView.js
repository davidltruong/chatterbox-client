// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    $message = $('#message')[0].value;
    // console.log($message);
    Parse.create($message, 'success');
    // $.ajax({
    //   // This is the url you should use to communicate with the API server.
    //   url: this.server,
    //   type: 'POST',
    //   data: JSON.stringify($message),
    //   contentType: 'application/json',
    //   success: 'success',
    //   error: 'error'
    // });
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};