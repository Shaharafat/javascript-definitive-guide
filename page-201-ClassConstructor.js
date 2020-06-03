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

var test =new Range(2,4)
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
Range.prototype = {}
console.log(r instanceof Range);

console.log(Object.getPrototypeOf(r));





console.log(test instanceof Range);
console.log(Object.getPrototypeOf(test));
