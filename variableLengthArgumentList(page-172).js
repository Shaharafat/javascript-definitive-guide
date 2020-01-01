function f(x,y,z){
  // ? first verify that the right number of arguments was passed.
  if(arguments.length != 3){
    throw new Error("function f called with " + arguments.length + "arguments, but it expects 3 arguments.");
  }
}


// ? One important use of the Arguments object is to write function that operate on any umber of arguments. The following function accepts ay number of numeric arguments and returns the value of the largest argument it is passed(see also the built in function Math.max() , which behaves the same way.)

function max(/* ... */){
  var max = Number.NEGATIVE_INFINITY;
  for(var i = 0; i < arguments.length;i++){
    if(arguments[i] > max) max = arguments[i];
  }
  return max;
}

console.log(max(1,2,3,4,4,5,6,4,3,3,234,23,3324,24,2,34,555));