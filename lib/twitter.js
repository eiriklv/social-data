exports = module.exports = function(req) {
  return function(url, callback) {
    var apiURL = 'http://urls.api.twitter.com/1/urls/count.json?url=' + url;
    req(apiURL, callback);
  };
};
