// A range class using a constructor.
// Another class representing a range of  values.

// THis is a constructor function that initializes new Range objects.
// Note that it does not create or return object. It just initializes this.

function Range(from, to) {
  // Store the start and end points (states) of this new onject.
  // These are non inherited properties that are unique to this object.
  this.from = from;
  this.to = to;
}

var test = new Range(2, 4);
console.log(test instanceof Range);
console.log(Object.getPrototypeOf(test));

console.log(Range.prototype.isPrototypeOf(test));

// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },

  // Invoke f once for each integer in the range.
  // This method works only for numeric ranges.
  foreach: function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },

  // Return a string representation of the range

  toString: function () {
    return `( ${this.from} ... ${this.to} )`;
  },
};

// Here are examples uses of a range object.
var r = new Range(1, 3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);

console.log(r instanceof Range);
Range.prototype = {};
console.log(r instanceof Range);

console.log(Object.getPrototypeOf(r));

console.log(test instanceof Range);
console.log(Object.getPrototypeOf(test));

// ==========================================================
// This portion is from page - 222 to see where an object is equal or not.

// The range class overwrote its constructor property. So add it now.
Range.prototype.constructor = Range;

//  A Range is not equal to any nonrange.
// Two ranges are equal if and only if their endpoints are equal.
Range.prototype.equals = function (that) {
  if (that == null) return false;
  if (that.constructor !== Range) return false;
  //  Now return true if and only if the two endpoints are equal.
  return this.from == that.from && this.to == that.to;
};

// ==========================================================
// This code is from page-223

// Range.prototype.compareTo = function (that) {
//   return this.from - that.from;
// }

// Order ranges by lower bound, or upper bound if the lower bound are equal.
//  Throws an error if passed a non-Range value..
// Returns o if and only if this.equals(that)
Range.prototype.compareTo = function (that) {
  if (!(that instanceof Range))
    throw new Error("Can't compare a Range with " + that);
  var diff = this.from - that.from;
  if (diff == 0) diff = this.to - that.to;
  return diff;
};

// Given the compareTo() method for a class is so that arrays of
// Range objects with code like this:
 

