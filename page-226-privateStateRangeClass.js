// 9-10 A Range class with weakly encapsulated endpoints.
function Range(from, to) {
  // Don't store the endpoints as properties of this object. Instead
  // define accessor functions that return the endpoint values.
  // These values are stored in the closure.
  this.from = function () {
    return from;
  };
  this.to = function () {
    return to;
  };
}


// The methods on the prototype
Range.prototype = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes: function (x) {
    return this.from() <= x && x <= this.to();
  },

  // Invoke f once for each integer in the range.
  // This method works only for numeric ranges.
  foreach: function (f) {
    for (var x = Math.ceil(this.from()); x <= this.to(); x++) f(x);
  },

  // Return a string representation of the range

  toString: function () {
    return `( ${this.from()} ... ${this.to()} )`;
  },
};

// ==================
var r = new Range(1,5)
console.log(r.includes(3));

// Mutate by replacing method. 
// this thing is a drawback of this approach.
r.from = function () {
  return 0;
}