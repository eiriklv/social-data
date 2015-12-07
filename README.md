social-data
====================================================

#### Introduction:
Get meta-data for a URL from the most popular social networks

### .facebook(url, callback)

Get social sharing data from Facebook

__Arguments__

* `url` - The URL you want data for.
* `callback(err, result)` - Callback to be called with the resulting data or an error.

__Example__

```js
var http = require('http');

var socialData = require('social-data')({
  agent: (new http.Agent()) // optional agent/pool
});

var url = 'http://www.vg.no/'

socialData.facebook(url, function(err, result) {
  if (!err) {
    // social shares data from facebook as result
  }
})
```

### .twitter(url, callback) (deprecated)

__NOTE:__ Twitter no longer supplies this functionality (sadly..)

### .linkedin(url, callback)

Get social sharing data from LinkedIn

__Arguments__

* `url` - The URL you want data for.
* `callback(err, result)` - Callback to be called with the resulting data or an error.

__Example__

```js
var http = require('http');

var socialData = require('social-data')({
  agent: (new http.Agent()) // optional agent/pool
});

var url = 'http://www.vg.no/'

socialData.linkedin(url, function(err, result) {
  if (!err) {
    // social shares data from facebook as result
  }
})
```
