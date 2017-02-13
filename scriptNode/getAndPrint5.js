module.exports = function getHTML(options, callback) {
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
};
