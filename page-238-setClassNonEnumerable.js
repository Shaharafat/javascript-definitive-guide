// Ser.js : An arbitrary set of values.
function Set() {
  // This is the constructor
  this.values = {}; // THe properties of this object hold the set
  this.n = 0; // How many values are in the set
  this.add.apply(this, arguments); // All arguments are values to add
}

// Add each of the arguments to the set.
Set.prototype.add = function () {
  // For each argument
  for (var i = 0; i < arguments.length; i++) {
    // The value to add to the set
    var val = arguments[i]; // Transform it to a string
    var str = Set._v2s(val); // If not already in the set
    if (!this.values.hasOwnProperty(str)) {
      // Map string to value
      this.values[str] = val; // Map string to value
      this.n++; // Increase set size
    }
  }
  return this;
};

// Remove each of the arguments from the set.
Set.prototype.remove = function () {
  // For each argument
  for (var i = 0; i < arguments.length; i++) {
    // Map to a string
    var str = Set._v2s(arguments[i]); // If it is in the set

    if (this.values.hasOwnProperty(str)) {
      // Delete it
      delete this.values[str]; // Decrease set size
      this.n--;
    }
  } // For method chaining
  return this;
};

// Return true if the set contains value; false otherwise.
Set.prototype.contains = function (value) {
  return this.values.hasOwnProperty(Set._v2s(value));
};

// Return the size of the set
Set.prototype.size = function () {
  return this.n;
};

// Call function f on the specified context for each element of the set.
Set.prototype.foreach = function (f, context) {
  for (var s in this.values) // For each string in the set
    if (this.values.hasOwnProperty(s))
      // Ignore inherited properties
      f.call(context, this.values[s]); // Call f on the values
};

// This internal function maps any javascript value to a unique string.
Set._v2s = function (val) {
  console.log(val);

  switch (val) {
    case undefined:
      return "u"; // Special primitive
    case null:
      return "n"; // values get single-letter
    case true:
      return "t"; // codes.
    case false:
      return "f";
    // case (checkId(val) === true): {
    //   return val;
    // }
    default:
      switch (typeof val) {
        case "number":
          return "#" + val; // Number get a # prefix
        case "string":
          if (/^@/.test(val)) return val;
          return '"' + val; // String get " prefix
        default:
          return "@" + objectId(val); // Objs and funcs get @
      }
  }

  /*
   * For any object, return a string. This function will return a different string
   * for different object. and will always return the same string
   * if called multiple times for same object. To do this it creates a
   * property on o. In ES5 the property would be nonenumberable and readonly.
   */

  function objectId(o) {
    var prop = "|**objectid**|"; // private property name for storing ids
    if (!o.hasOwnProperty(prop))
      // If the object has no id
      o[prop] = Set._v2s.next++; // Assign it the next available
    return o[prop]; // Return the id.
  }

  // function checkId(id) {
  //   if(/^@/.test(id)) return true
  // }
};

Set._v2s.next = 100; // Start assigning object ids at this value.

// ============================================
// Defining nonenumerable properties.
// wrap out code in a function so we can define variable in the function scope
(function () {
  // Define objectId as a nonenumerable property inherited by all object.
  // when this property is read, the getter function is invoked.
  // It has  no setter, so it is read-only
  // It is nonconfigurable , so it can't be deleted.
  Object.defineProperty(Object.prototype, "objectId", {
    get: idGetter, // method to get value
    enumerable: false, // non enumerable
    configurable: false, // can't delete it
  });

  // This is the getter function called when objectId is read
  function idGetter() {
    // A getter function to return the id
    if (!(idprop in this)) {
      // If object doesn't already have an id
      if (!Object.isExtensible(this))
        // And if we can add a property
        throw Error("Can't define id for nonextensible objects");
      Object.defineProperty(this, idprop, {
        // Give ir one now
        value: nextid++, // This is the value
        writable: false, // Read only
        enumerable: false, // Nonenumerable
        configurable: false, // Nondeleteable
      });
    }
    return this[idprop] // Now return the exiting or new value
  }

  // These variable aer used by idGetter() and are private to this function
  var idprop = "|**objectId**|" // Assume this property isn't in use
  var nextid = 1; // start assigning ids at this #
}());
