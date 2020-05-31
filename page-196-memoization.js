// in funcitonal programming, caching previously computed results named as memoization.

// return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
  var cache = {};
  return function () {
    var key = arguments.length + Array.prototype.join.call(arguments, ",");
    console.log(key);

    console.log(cache);
    if (key in cache) return cache[key];
    else return (cache[key] = f.apply(this, arguments));
  };
}

function gcd(a, b) {
  var t;
  if (a < b) (t = b), (b = a), (a = t);
  while (b != 0) (t = b), (b = a % b), (a = t);
  return a;
}

var gcdmemo = memoize(gcd);
let res = gcdmemo(85, 187);
console.log(res);
