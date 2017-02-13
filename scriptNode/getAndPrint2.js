function getAndPrintHTML() {
  var https = require('https');
  var buffer = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (response) => {

    response.setEncoding('utf8');

    response.on('data', (data) => {
      buffer += data;
    });

    response.on('end', () => {
      console.log(buffer);
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML();
