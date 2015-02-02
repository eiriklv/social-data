exports = module.exports = function(req) {
  return function(url, callback) {
    var apiURL = 'https://api.facebook.com/method/links.getStats?urls=' + url + '&format=json';
    req(apiURL, callback);
  };
};
