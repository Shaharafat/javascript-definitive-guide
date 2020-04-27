const object = {
  a: 1,
  b: 2,
  c: 3
};
// The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly upon a given object.
console.log(Object.getOwnPropertyNames(object));