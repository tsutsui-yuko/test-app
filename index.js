'use strict';

var path = require('path');

exports.get = function(event, context, callback) {
  var result = {
    statusCode: 200,
    body: 'Hello CodeStar',
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
