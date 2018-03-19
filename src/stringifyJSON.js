// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var array = [];
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    for (var i in obj)
      array.push(stringifyJSON(obj[i]));
    return "[" + array + "]";
  }
  if (typeof obj === "object") {
    for(var key in obj) {
      if(!(obj[key]===undefined || typeof obj[key] === 'function'))
        array.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return "{" + array + "}";
  }

};
