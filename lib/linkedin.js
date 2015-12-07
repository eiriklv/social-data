exports = module.exports = function(req) {
  return function(url, callback) {
    var apiURL = 'http://www.linkedin.com/countserv/count/share?url=' + encodeURIComponent(url) + '&format=json';
    req(apiURL, callback);
  };
};
