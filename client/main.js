'use strict';

var form1 = document.querySelector('form');
form1.addEventListener('submit', function (e) {

  var submit = confirm('Are you sure?');
  if (submit === false) {
    e.preventDefault();
  }
});

var form2 = document.querySelectorAll('form')[1];
form2.addEventListener('submit', function (e) {
  e.preventDefault();
  console.dir(form2);
  var input = document.querySelector('#message-input');
  console.log(input.value);
});

// Ajax
// sendRequest('GET', 'http://localhost:9001/status', onResponse);
// sendRequest('POST', 'http://localhost:9001/echo', onResponse, 'message=hi');


function sendRequest (method, url, callback, data) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.open(method, url);
  xhr.send(data);
}

function onResponse (e) {
  // console.log(e);
  console.log('Server responded with: ' + e.target.responseText);
}
