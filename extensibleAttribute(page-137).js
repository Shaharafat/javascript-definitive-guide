var p = {
  x: 1
};


console.log(Object.isExtensible(p));
console.log(Object.preventExtensions(p));
console.log(Object.isExtensible(p));

Object.seal(p); //? Now, this property is not cannot be added to the object, and existing properties cannot be deleted or configured.
console.log(Object.isExtensible(p));
console.log(Object.isSealed(p));
console.log(Object.getOwnPropertyDescriptor(p, "x"));

Object.defineProperty(p, "x", {
  writable: false
});
console.log(Object.getOwnPropertyDescriptor(p, "x"));

Object.freeze(p);

console.log(Object.getOwnPropertyDescriptor(p, "x"));
console.log(Object.isFrozen(p));


//!Create a sealed object with a frozen prototype and a nonenumberable property
var o = Object.seal(Object.create(Object.freeze({
  x: 1
}), {
  y: {
    value: 2,
    writable: true
  }
}));
//? through y is not enumerable . Object.getOwnPropertyNames() will fetch it.
console.log(Object.getOwnPropertyNames(o));