// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (answer){

  if ( typeof answer === "number" || typeof answer === 'boolean' ){
    var result = ""+answer;
    return result;
  }

  if ( answer=== null ){
    return "null";
  }
  if ( typeof answer === 'string' ){
    var result = '"'+answer+'"';
    return  result;
  }
  if( Array.isArray(answer) && answer.length === 0){
    return '[]';
  }


  if ( Array.isArray(answer) && answer.length > 0 ){
    var result = [];
    for ( var i = 0; i < answer.length;i++ ){

      result.push(stringifyJSON(answer[i]))

    }
    return '['+ result +']';
  }

  if( typeof answer==="object"  && Object.keys(answer).length === 0){
    return '{}';
  }
  if( typeof answer==="object" && Object.keys(answer).length>0){
    var result = '';
    var counter = 0;


    for(var key in answer){

      if(answer[key]===undefined || typeof answer[key]==="function"){
        break;
      }
      if(counter === Object.keys(answer).length-1){

        result +=  stringifyJSON(key) + ":" + stringifyJSON(answer[key])

        return '{' +  result + '}';

      }



     result +=  stringifyJSON(key) + ":" + stringifyJSON(answer[key]) + ','
     counter++
    }
      // var resultTwo = result.slice(0, result.length-1)
     return '{' +  result + '}'

  }

//   {"boolean, true": true, "boolean, false": false, "null": null },
//   // basic nesting
//   {"a":{"b":"c"}},
//   {"a":["b", "c"]},
//   [{"a":"b"}, {"c":"d"}],
//   {"a":[],"c": {}, "b": true}
// ];


}