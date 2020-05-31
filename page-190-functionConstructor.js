// the function constructors expects any number of string arguments.
// the last argument is the text of function body.

// Function constructor creates anonymous function.

var f = new Function("x","y","return x+y")
console.log(f(2,3));

// above code is same as 
var f2 = function (x, y) {
  return x+y
}


// ! very important point about Function() constructor is that 
// ! the function it creattes do not use lexical scoping instead, they are always compiled
// as if they were top-level functons.


var scope = "global"
function constructorFunction() {
  var scope = "local"
  return new Function("return scope")
}

// this line returns "global" because the function returned byt the 
// Function() constructor doesnot use the local scope.
// console.log(constructorFunction()());
var result = constructorFunction()()
