var request = require('request');
var http = require('http');

exports = module.exports = function(options) {
  return function(url, callback) {
    var customAgent = new http.Agent();
    customAgent.maxSockets = 5;

    var agent = options.agent || customAgent;

    var requestObject = {
      pool: agent,
      url: url
    };

    request(requestObject, function(error, response, body) {
      if (error) return callback(error);

      if (!error && response.statusCode == 200) {
        var data;
        var err;

        try {
          data = JSON.parse(body);
        } catch (e) {
          err = e;
        }

        if (Array.isArray(data)) data = data[0];

        callback(err, data);
      } else {
        callback(new Error('request for social data failed'));
      }
    })
  }
}
