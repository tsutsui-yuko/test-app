'use strict';


exports.get = function(event, context, callback) {
  var result = {
    statusCode: 200,
    body: "hello world",
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
