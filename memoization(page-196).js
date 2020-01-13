/* 
 * Return a memoized version of f.
 * It only works if arguments to of all have dintinct string representations.
 */

function memoize(f) {
  var cache = {}; //? value cache stored in the function.

  return function () {
    // ? Create a string version of the arguments to use as a cache key.
    var key = arguments.length + Array.prototype.join.call(arguments, ", ");
    console.log(key);
    // console.log(cache);
    
    if (key in cache) return cache[key];
    else return cache[key] = f.apply(this, arguments);
  }
}


/* 
 * Return a greatest common divisor of two integers, using the euclidian algorithm.
 */

function gcd(a, b) {
  var t;
  if (a < b) t = b, b = a, a = t; //? Ensure that a >= b
  while (b != 0) t = b, b = a % b, a = t;
  return a;
}

var gcddemo = memoize(gcd);
console.log(gcddemo(85,187));

// console.log(typeof memoize.cache);

/* 
 * Note that when we write a recursive function that we will be memoizing,
 * we typically want to recurse to the momoized version, not the original.
*/

var factorial = memoize(function(n){
  return (n <= 1)? 1:n*factorial(n-1);
});

console.log(factorial(5));

