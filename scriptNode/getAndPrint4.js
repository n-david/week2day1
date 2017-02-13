function getHTML(options, callback) {
  var https = require('https');
  var buffer = '';

  https.get(options, (response) => {

    response.setEncoding('utf8');

    response.on('data', (data) => {
      buffer += data;
    });

    response.on('end', () => {
      callback(buffer);
      console.log('Response buffer stream complete.');
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
