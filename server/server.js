'use strict';

var http = require('http');
var url = require('url');
var qs = require('querystring');

var server = http.createServer();
server.on('request', onRequest);
server.listen(process.env.PORT);

function onRequest (request, response) {
  console.log(request.url);

  response.setHeader('Access-Control-Allow-Origin', '*');

  var urlObj = url.parse(request.url, true);
  var endpoint = urlObj.pathname;

  if (endpoint === '/status') {
    response.end('OK');

  } else if (endpoint === '/echo')
  {
    var requestBody = '';
    request.on('data', function (chunk) {
      requestBody += chunk;
    });
    request.on('end', function () {
      var requestObj = qs.parse(requestBody);
      if (requestObj.message) {
        response.end(requestObj.message);
      } else {
        response.writeHead(400);
        response.end(http.STATUS_CODES[400]);
      }
    });
  } else {
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
  }
}
