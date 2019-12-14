var p = {x:1};
var o = Object.create(p);
/* 
 * To determine whether one object is the prototype of (or is part of the prototype chain of) 
 * another object, use "isPrototypeOf()" method.
*/

console.log(p.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(p));
console.log(Object.prototype.isPrototypeOf(o));

// checking the class of an object. class attribute is a string provides information about the type of the object.

function classOf(o){
  if(o === null) return "Null";
  if(o === undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classOf(null));
console.log(classOf({}));
console.log(classOf(1));
console.log(classOf("text"));
console.log(classOf([]));
console.log(classOf(/./));
console.log(classOf(false));
console.log(classOf(new Date()));

console.log(Object.isExtensible(p));
console.log(Object.preventExtensions(p));
console.log(Object.isExtensible(p));

