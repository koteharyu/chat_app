App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function () {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function () {
    // Called when the subscription has been terminated by the server
  },

  received: function (data) {
    $('#posts').append("<p>" + data["message"] + "</p>");
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function (message) {
    return this.perform('speak', { message: message });
  }
});

jQuery(document).on('keypress', '[data-behavior~=room_speaker]', function (event) {
  if (event.keyCode === 13) {
    App.room.speak([event.target.value, $('[data-user]').attr('data-user'), $('[data-room]').attr('data-room')]);
    event.target.value = '';
    return event.preventDefault;
  }
});
