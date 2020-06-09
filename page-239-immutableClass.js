// An immutable class with read-only properties and methods

// This function works with or without 'new': a constructor and factory function
function Range(from, to) {
  // These are descriptors for the read-only from and to properties
  var props = {
    from: {
      value: from,
      enumerable: true,
      writable: false,
      configurable: false,
    },
    to: {
      value: to,
      enumerable: true,
      writable: false,
      configurable: false,
    },
  };
  if (this instanceof Range) {
    // If invoked as a constructor
    Object.defineProperties(this, props); // Define the properties
  } else {
    // Otherwise, as a factory
    return Object.create(
      Range.prototype, // Create and return true
      props
    ); // Range object with props
  }
}

// If we add properties to the Range.prototype object in the same way,
// then we can set attributes on those properties. Since we don't specify
// enumerable, writable,or configurable, they all default to false.
Object.defineProperties(Range.prototype, {
  includes: {
    value: function (x) {
      return this.from <= x && x <= this.to;
    },
  },
  foreach: {
    value: function (f) {
      for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
  },
  toString: {
    value: function () {
      return `( ${this.from} ... ${this.to})`;
    },
  },
});

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

// ex 9-20 A simpler immutable class
function Range(from, to) {
  // Constructor for an immutable Range class
  this.from = from;
  this.to = to;
  freezeProps(this); // make properties immutable
}

Range.prototype = hideprops({
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
