// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var answer = [];

  function recurse(elem) {

    if( elem && elem.classList ){

        var classList = Array.prototype.slice.call(elem.classList);

        if (classList.includes(className)) {

            answer.push(elem);
         }
      }

        if (elem===false || elem.childNodes===false) {

      return answer;

    }

    elem.childNodes.forEach(function(childNode) {

       recurse(childNode);

    });
  }

  recurse(document.body);
  return answer;


}


