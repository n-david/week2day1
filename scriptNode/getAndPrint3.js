function getAndPrintHTML(options) {
  var https = require('https');
  var buffer = '';

  https.get(options, (response) => {

    response.setEncoding('utf8');

    response.on('data', (data) => {
      buffer += data;
    });

    response.on('end', () => {
      console.log(buffer);
      console.log('Response buffer stream complete.');
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
