'use strict';

var form1 = document.querySelector('form');
form1.addEventListener('submit', function (e) {
  e.preventDefault();
  sendRequest('GET', form1.getAttribute('action'), onResponse);
});

var form2 = document.querySelectorAll('form')[1];
form2.addEventListener('submit', function (e) {
  e.preventDefault();
  var input = document.querySelector('#echo-input');
  sendRequest('POST', form2.getAttribute('action'), onResponse, 'echo=' + input.value);
});

var form3 = document.querySelectorAll('form')[2];
form3.addEventListener('submit', function (e) {
  e.preventDefault();
  var input = document.querySelector('#message-input');
  var input1 = document.querySelector('#name-input');
  sendRequest('POST', form3.getAttribute('action'), onResponse, 'message=' + input.value + '&username=' + input1.value);
});

ajaxify(form1, function (e) {
  console.log('ajax response for form1');
});

function ajaxify (form, callback) {

}

// Ajax
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
