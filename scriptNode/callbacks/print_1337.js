var getHTML = require('../getAndPrint5');

function to1337(html) {
  var mapping = {
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    s: '5',
    t: '7',
    ck: 'x',
    er: '0r',
    you: 'j00'
  };
  var obfuscated = '';
  for (var i = 0; i < html.length; i++) {
    html[i] in mapping ? obfuscated += mapping[html[i]] : (obfuscated += html[i]);
  }
  console.log(obfuscated);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, to1337);
