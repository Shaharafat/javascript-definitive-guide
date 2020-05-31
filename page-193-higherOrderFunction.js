// A higher order function is a function that operates on function taking
// one or more functions as arguments and returning a new function.
function not(f) {
  return function () {
    var result = f.apply(this, arguments);
    return !result;
  };
}

var even = function (x) {
  return x % 2 === 0;
};

var odd = not(even);
let res = [1, 1, 3, 5, 5].every(odd);

console.log(res);

// another example

// Return a new function that computes f(g(...))
// The returned function h passes all of its arguments to g, and then passes
// the return value of  g to f, and then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.

function compose(f, g) {
  return function () {
    console.log(arguments);
    // console.log(this);
    
    
    return f.call(this,g.apply(this,arguments))
  }
}

var square = function (x) {
  return x*x
}

var sum = function (x, y) {
  return x+y
}

var squareofsum = compose(square, sum);

let result = squareofsum(2, 3)

console.log(result);
