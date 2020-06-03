/*
 * The prototype object of built in JS classes is also "open" like this, 
 * which means that we can add method to numbers, strings, arrays, functions and so on. 
*/


// Invoke the function f this many times, passing the iteration number
// For example, to print "hello" 3 times:
// var n = 3;
// n.times(function(n){console.log(`${n} hello`)})


Number.prototype.times = function (f, context) {
  var n = Number(this)
  console.log(n);
  
  for (var i = 0; i < n;i++)
  f.call(context,i)
}
// Number.times(function(n){console.log(`${n} hello`)},)

var p = 5;
// n=
console.log(n);
console.log(p);


p.times(function(n){console.log(`${n} hello`)},this)


// Define the ES5 String.trim method if one dows not already exists
// This methodreturns a string with whitespace removerd from the start and end.
// if (String.prototype.trim) {
//   console.log("it exists");
  
// }
String.prototype.trim = String.prototype.trim || function () {
  if (!this) return this; // Don't alter the empty string.
  return this.replace(/^\s+|\s+$/g)
}

var str = "   arafat    "

var res = str.trim()
console.log(res);
