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


// 9-12 Singleton Set : a simple set subclass

// The constructor function
function SingletonSet(member) {
  this.member = member; // remember the single member of the set
}

// create a prototype object that inherits from prototype of set.
SingletonSet.prototype = inherit(Set.prototype);

// Now add properties to the prototype
// These properties override the properties of the same name from Set.prototype.
extend(SingletonSet.prototype, {
  // Set the constructor property appropriately
  constructor: SingletonSet,
  // this set is read-only: add() and remove() throw errors.
  add: function () {
    throw "read-only set";
  },

  remove: function () {
    throw "read-only set";
  },

  // A SingletonSet always has size 1
  size: function () {
    return 1;
  },

  // Just invoke the function once, passing the simple member.
  foreach: function (f, context) {
    f.call(context, this.member);
  },

  // The contains() method is simple: true only for one value
  contains: function (x) {
    return x === this.member;
  },
});

// let's define SingletonSet's own equal function
SingletonSet.prototype.equals = function (that) {
  return that instanceof Set && that.size() == 1 && that.contains(this.member)
}


var single = new SingletonSet("name");
console.log(single.size());
