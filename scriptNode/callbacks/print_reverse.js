var getHTML = require('../getAndPrint5');

function toReverse(html) {
  console.log(html.split('').reverse().join(''));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, toReverse);
