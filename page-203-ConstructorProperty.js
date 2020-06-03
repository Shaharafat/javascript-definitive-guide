// Any javascript function can be used as a constructor
// and constructor invocation need a prototype property.
// Therefore, every JS function (except function returned by ES5 Function.bind() method)
// automatically has a prototype porperty. The value of this property is an object that has a single
// nonenumerable constructor property.
// The value of the constructor property is the //? function object

var F = function () {};
var p = F.prototype;
var C = p.constructor;
console.log(C === F);

// The existence of this predefined prototype object with its constructor property means
// that object typically inherit a constructor property that refers to their constructor.
// since constructors server as the public identity of a class, this constructor proeprty gives the class
// of an object:

var o = new F();
console.log(o.constructor === F);
console.log(typeof F);

function Range(from, to) {
  // Store the start and end points (states) of this new onject.
  // These are non inherited properties that are unique to this object.
  this.from = from;
  this.to = to;
}
// the new prototype object it defines does not have a constructor property.
// so instances of the Range class, as defined , donot have a constructor property.
// we can remedy this problem by explicitly adding a constructor to the prototype.
// Range.prototype = {
//   constructor: Range, // ! explicitly adding constructor.

//   // Return true if x is in the range, false otherwise
//   // This method works for textual and Date ranges as well as numeric.
//   includes: function (x) {
//     return this.from <= x && x <= this.to;
//   },

//   // Invoke f once for each integer in the range.
//   // This method works only for numeric ranges.
//   foreach: function (f) {
//     for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
//   },

//   // Return a string representation of the range

//   toString: function (){
//     return `( ${this.from} ... ${this.to} )`;
//   },
// }

// Another common technique is to use the predefined prototype object with its constructor property,
// and add methods to it one at a time.

// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function (x) {
  return this.from <= x && x <= this.to;
};

Range.prototype.foreach = function (f) {
  for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
};

Range.prototype.toString = function () {
  return `( ${this.from} ... ${this.to} )`;
};

if (Range.prototype.constructor) {
  console.log("constructor exists...");
}
