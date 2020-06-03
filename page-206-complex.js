/*
 * Complex.js
 * This file defines a Complex class to represent complex numbers.
 * Recall that a complex number is the sum of a real number and an imaginary number
 * and that the imaginary number i is the square root of -1.
 */

/*
 * This constructor function defines the instance fields r and i on every instance it creates.
 * These fields hold the real and imaginary parts of the complex number: they are
 * the states of the object.
 */

function Complex(real, imaginary) {
  if (isNaN(real) || isNaN(imaginary)) {
    throw new TypeError();
  }

  this.r = real;
  this.i = imaginary;
}

/*
 * The instance methods of a class are defined as function-valued properties
 * of the prototype object. THe methods defined here are inherited by all
 * instance and provide the shared behaviour of the class.
 */

// Add a complex number of this one and return the sum in a new object.
Complex.prototype.add = function (that) {
  return new Complex(this.r + that.r, this.i + that.i);
};

// Multiply this complex number by another and return  the product.
Complex.prototype.mul = function (that) {
  return new Complex(
    this.r * that.r - this.i * that.i,
    this.r * that.i + this.i * that.r
  );
};

// Return the real magnitude of a complex number. This is defined
// as its distance from the origin (0,0) of the complex plane.
Complex.prototype.mag = function () {
  return Math.sqrt(this.r * this.r + this.i * this.i);
};

// Return a complex number that is the negative of this one.
Complex.prototype.neg = function () {
  return new Complex(-this.r, -this.i);
};

// Convert a Complex object to a string in a useful way.
Complex.prototype.toString = function () {
  return `{${this.r},${this.i}}`;
};

// Test whether this Complex object has the same values as another.
Complex.prototype.equals = function (that) {
  return (
    that != null &&
    that.constructor === Complex &&
    this.r === that.r &&
    this.i === that.i
  );
};

/*
 * Class fields (such as constants) and class method are defined as
 * properties of the constructor. Note that class methods do
 * not generally use the this keyword: they operate only on their arguments.
 */

// Here are some class fields that hold useful predefined complex numbers.
// Their names are uppercase to indicate that they are constants.
// (In ES5, we could actually make these properties read-only.)
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// THis class method parses a string in the format return by the toString
// instance method and returns a COmplex object or throws a TypeError.
Complex.parse = function (s) {
  try {
    // Assume that the parsing will succeed
    var m = Complex._format.exec(s); // Regular expression magic
    return new Complex(parseFloat(m[1]), parseFloat(m[2]));
  } catch (x) {
    throw new TypeError(`Can't parse ${s} as a complex number.`);
  }
};

// A "private" class filed used in Complex.parse() above.
// THe underscore in its name indicates that it is intended for internal
// use and should not be considered part of the public API of this class.
Complex._format = /^\{([^,]+),([^}]+)\}$/;

// Using Complex class.
var c = new Complex(2, 3); // create a new object with the constructor.
console.log(c.i);

console.log(c.r);

var d = new Complex(c.i, c.r); // use instance properties of c
console.log(c.add(d).toString()); // use instance methods
console.log(c.toString());

// A more complex expression that uses a class method and field
console.log(Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO));

// AUGMENTING JS CLASS

/*
 * JS prototype based inheritance mechanism is dunamic: an object inherits
 * properties from its prototype, even if the properties of the prototype change after the object is created.
 */

// return a complex number that is the complex conjugate of this one.
Complex.prototype.conj = function () {
  return new Complex(this.r, -this.i);
};

console.log(c.conj());

console.log(Object.getPrototypeOf(c));
