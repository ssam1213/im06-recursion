// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var body = document.body;
  var array = [];

  var findClassName = function (e) {
    if (e.classList && e.classList.contains(className))
      array.push(e);

    if(e.childNodes && e.nodeType === 1){
      for ( var i in e.childNodes )
        findClassName ( e.childNodes[i] );
    }
  };

  findClassName(body);
  return array;
};
