function getHTML(options, callback) {
  var https = require('https');

  https.get(options, (response) => {

    response.setEncoding('utf8');

    response.on('data', (data) => {
      callback(data);
    });

    response.on('end', () => {
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
