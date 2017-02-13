function getAndPrintHTML() {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var str = '';

  https.get(requestOptions, (response) => {

    response.setEncoding('utf8');

    response.on('data', (data) => {
      str += data;
    });

    response.on('end', () => {
      console.log(str);
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTML();
