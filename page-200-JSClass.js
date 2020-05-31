// inherit function.
// inherit returns a newly created object that inherits properties from the prototype object p.
// It uses the ES5 function object.create() if
// it is defined and otherwise falls back to an older technique.

function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== "object" && t !== "function") throw TypeError();
  function f() {}
  f.prototype = p;
  return new f();
}


// A class representing a range of values.
// This is a factory function that returns a new range object.

function range(from, to) {
  // use the inherit() function to create an object that inherits from prototype object defined below.
  // The prototype object is stored as a property of this funciton , and defined the shared method(behavious)
  // for all range object.

  var r = inherit(range.methods)

  // Store the start and end points (states) of this new range object. 
  // These are non inherited properties that are unique to this object. 
  r.from = from
  r.to = to

  // Finally return the new object.
  return r;
}


// This prototype object defines methods inherited by all range objects.
range.methods = {
  // Return true if x is in the range , false otherwise
  // This method works for the textual and Date ranges as well as numeric.
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },

  // Invoke f once for eah integer in the range.
  // This method works only for numeric ranges.
  foreach: function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++)
      f(x)
  },

  // Return a string representation of the range.
  toString: function () {
    return `( ${this.from} ... ${this.to} )`
  }
}

// Here are examples uses of a range object
var r = range(1,3)

console.log(r.includes(2));

r.foreach(console.log)

console.log(r)
