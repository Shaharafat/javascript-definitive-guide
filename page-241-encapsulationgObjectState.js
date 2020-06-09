/*
 * Property descriptor object they require can make the code difficult to read
 * An alternative to define utility functions for modifying the attributes of
 * properties that have already been defined.
 */

// Example 9-19 Property descriptor utilities.

// Make the named (or all) properties of o non writable and non configurable.
function freezeProps(o) {
  var props =
    arguments.length == 1 // if 1 arg
      ? Object.getOwnPropertyNames(o) // use all props
      : Array.prototype.splice.call(arguments, 1); // else names props

  props.forEach(function (n) {
    // Make each one read-only and permanent
    // Ignore nonconfigurable properties
    if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
    Object.defineProperty(o, n, {
      writable: false,
      configurable: false,
    });
  });
  return o; // so we can keep using it.
}

// Make the named (or all) properties of o non enumerable, if configurable.
function hideProps(o) {
  var props =
    arguments.length == 1 // If 1 arg
      ? Object.getOwnPropertyNames(o) // use all props
      : Array.prototype.splice.call(arguments, 1); // else named props

  props.forEach(function (n) {
    // Hide each one from the for/in loop
    // Ignore nonconfigurable properties
    if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
    Object.defineProperty(o, n, {
      enumerable: false,
    });
  });
  return o;
}

// Ex 9-21 A Range class with strongly encapsulated endpoints
// This version of the Range class is mutable but encapsulates its endpoint
// variables to maintain the invariant that from <= to.
function Range(from, to) {
  // verify that the invariant holds when we're created.
  if (from > to) throw new Error("Range: from must be <= to");

  // Define the accessor methods that maintain the invariant
  function getFrom() {
    return from;
  }

  function getTo() {
    return to;
  }

  function setFrom(f) {
    // Don't allow from to be set > to
    if (f <= to) from = f;
    else throw new Error("Range: from must be <= to");
  }

  function setTo(t) {
    // Don't allow to to be set < from
    if (t >= from) to = t;
    else throw new Error("Range: to must be >= from");
  }

  // Create enumerable, nonconfigurable properties that use the accessors
  Object.defineProperties(this, {
    from: {
      get: getFrom,
      set: setFrom,
      enumerable: true,
      configurable: false,
    },
    to: {
      get: getTo,
      set: setTo,
      enumerable: true,
      configurable: false,
    },
  });
}

// The prototype object is unchanged from previous examples.
// The instance methods read from and to as if they were ordinary properties.
Range.prototype = hideProps({
  // define prototype with nonenumerable properties
  constructor: Range,
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  foreach: function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },
  toString: function () {
    return `( ${this.from} ... ${this.to})`;
  },
});

// Object.isExtensible()
// Object.preventExtensions()
// Object.seal(Object.prototype)

// Another dynamic feature of JS is the ability to replace for
// (or monkey patch) methods of an object.

var original_sort_method = Array.prototype.sort;

Array.prototype.sort = function () {
  var start = new Date();
  
  // original_sort_method.apply(this, arguments );
  
  original_sort_method.apply(this, arguments)
  var end = new Date();
  console.log("Array sort took " + end - start + " miliseconds.");
};

[5,4,3,2,1].sort()