'use strict';

var request = {
  on: function (eventName, callbackFunction) {
    if (eventName === 'data') {
      // Bussiness logic
      var newChunk = new Buffer('.....');
      callbackFunction(newChunk);
    }
  }
};

// User code in server/server.js
request.on('data', function () {});
