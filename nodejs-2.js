'use strict';

var request = {
  on: functionOn
};

// User code in server/server.js
request.on('data', moshe);


function functionOn (eventName, shuki) {
  if (eventName === 'data') {
    // Bussiness logic
    var newChunk = new Buffer('.....');
    shuki(newChunk);
  }
}

function moshe (chunk) {
  console.log(chunk);
}
