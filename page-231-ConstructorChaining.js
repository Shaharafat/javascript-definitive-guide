/*
 * Often however, when we define a subclass, we only want to augment or modify
 * the behaviour of our superclass methods, not replace them completely.
 * To do this, the constructor and methods of the subclass call or chain to
 * the superclass constructor and the superclass methods.
 */
// Inherit function from 6.1
function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {}
  f.prototype = p;
  return new f();
}

// Extend Function
function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

// A set class
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

// 9-13 Constructor and method chaining from subclass to superclass.
/*
 * NonNullSet() constructor does not take anu action of its own: it simply passes
 * its superclass constructor.
 *
 * NonNullSet is a subclass of set that dows not allow null and undefined
 * as member of the set.
 */

function NonNullSet() {
  //  Just chain to out superclass.
  // Invoke the superclass constructor as an ordinary function to initialize
  // the object that has been created by this constructor invocation.
  Set.apply(this, arguments);
}

// Make NonNullSet a subclass of Set:
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

// To exclude null and undefined, we only have to override the add() method
// ! METHOD CHAINING...
NonNullSet.prototype.add = function () {
  // Check for null or undefined arguments
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] == null)
      throw new Error("Can't add null or undefined to a NonNullSet");
  }

  //! Chain to the superclass to perform the actual insertion
  return Set.prototype.add.apply(this, arguments);
};

// ==================================================================

// Example 9-14 A class factory and method chaining
/*
 * This function returns a subclass of specified Set class and overrides
 * the add() method of that class to apply the specified filter.
 */

function filteredSetSubclass(superclass, filter) {
  var constructor = function () {
    superclass.apply(this, arguments);
  };
  var proto = (constructor.prototype = inherit(superclass.prototype));
  proto.constructor = constructor;
  proto.add = function () {
    // Apply the filter to all arguments before adding any
    for (var i = 0; i < arguments.length; i++) {
      var v = arguments[i];
      if (!filter(v)) throw `value ${v} rejected by filter`;
    }
    // chain to our superclass add implementation.
    superclass.prototype.add.apply(this, arguments);
  };
  return constructor;
}

// Define a set class that holds strings only
var StringSet = filteredSetSubclass(Set, function (x) {
  return typeof x === "string";
});

// Define a set class that does not allow null, undefined or functions.
var Myset = filteredSetSubclass(NonNullSet, function (x) {
  return typeof x !== "function";
});

/*
 * One interesting point to note about Example 9-14 is that
 * by wrapping a function around our subclass creation code,
 * we are able to use the superclass argument in our constructor
 * and method chaining code rather than hard-coding the name
 * of the actual superclass. This means that if we wanted to
 * change the superclass, we would only have to change it in one
 * spot, rather than searching out code for every mention of it.
 * This is arguably a technique that is worth using. even if we're
 * not defining a class factory. For example we could rewrite our
 * NonNullSet using a wrapper function and the Function.prototype.extend()
 * method like this:
 */

var NonNullSet = (function () {
  // Define and invoke function
  var superclass = Set; //! Only specify the superclass once.
  return superclass.extend(
    function () {
      superclass.apply(this, arguments); // the constructor
    },
    {
      // the methods
      add: function () {
        // check for null or undefined arguments
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] == null) {
            throw new Error(`Can't add null or undefined`);
          }
        }
        // chain to the superclass to perform the actual insertion
        return superclass.prototype.add.apply(this, arguments);
      },
    }
  );
})();
