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
// extend function
function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

// Set class
function Set() {
  // This is the constructor
  this.values = {}; // THe properties of this object hold the set
  this.n = 0; // How many values are in the set
  this.add.apply(this, arguments); // All arguments are values to add
}

/*
 * IF an object O is an instance of a class B and B is a subclass of A, then O
 * must also inherit properties from A.
 */
// B.prototype = inherit(A.prototype)
// B.prototype.constructor = B;

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


