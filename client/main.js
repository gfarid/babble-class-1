'use strict';

// Ajax
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', onResponse);
xhr.open('GET', 'http://localhost:9001/status');
xhr.send();

function onResponse (e) {
  // console.log(e);
  console.log('Server responded with: ' + e.target.responseText);
}
