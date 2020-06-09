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

// ==============================
/*
 * A FilteredSet wraps a specified set object and applies a specified filter
 * to values passed to its add() method. ALl of the other core set methods
 * simply forward to the wrapped set instance.
 */
// A simple function for creating simple subclasses
function defineSubclass(
  superclass, // Constructor of the superclass
  constructor, // The constructor for the new subclass
  methods, // Instance methods: copied to prototype
  statics // Class properties: copied to constructor
) {
  // Set up the prototype object of the subclass
  constructor.prototype = inherit(superclass.prototype);
  constructor.prototype.constructor = constructor;

  // Copy the methods and statics as we would for a regular class
  if (methods) extend(constructor.prototype, methods);
  if (statics) extend(constructor, statics);

  // Return the class
  return constructor;
}

// We can also do this as a method of the superclass constructor
Function.prototype.extend = function (constructor, methods, statics) {
  return defineSubclass(this, constructor, methods, statics);
};

var FilteredSet = Set.extend(
  function FilteredSet(set, filter) {
    this.set = set;
    this.filter = filter;
  },
  {
    // The instance methods
    add: function () {
      // If we have a filter, apply it
      if (this.filter) {
        for (var i = 0; a < arguments.length; i++) {
          var v = arguments[i];
          if (!this.filter(v)) {
            throw new Error(`FilteredSet: value ${v} rejected by filtered`);
          }
        }
      }
      // Now forward the add() method to this.set.add()
      this.set.add.apply(this.set, arguments);
      return this;
    },

    // The rest of the methods just forward to this.set and do nothing else.
    remove: function () {
      this.set.remove.apply(this.set, arguments);
      return this;
    },
    contains: function (v) {
      return this.set.contains(v);
    },

    size: function () {
      return this.set.size();
    },
    foreach: function (f, c) {
      this.set.foreach(f, c);
    },
  }
);

/*
 * One of the benefits of using composition in this case is that only a single FilteredSet
 * subclass is required. Instance of this class can be created to restrict the membership
 * of any other set instance. Instead of using the NonNullSet class defined earlier,
 * for example, we can do this:-
 */

var s = new FilteredSet(new Set(), function (x) {
  return x !== null;
});

// we can even filter a filtered set
var t = new FilteredSet(s, {
  function(x) {
    return !(x instanceof Set);
  },
});
