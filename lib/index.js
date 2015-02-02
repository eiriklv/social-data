exports = module.exports = function(options) {
  var req = require('./req')(options);

  return {
    twitter: require('./twitter')(req),
    facebook: require('./facebook')(req),
    linkedin: require('./linkedin.js')(req)
  };
};
