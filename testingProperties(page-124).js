var o = {x:1};
console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);


console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));  //!toString is an inherited property.

// propertyIsEnumerable
function inherit(p){
  if (p == null) throw TypeError();
  if(Object.create) return Object.create(p);
  var t = typeof p;
  if(t !== "object" && t !== "function") throw TypeError();
  function f(){};
  f.prototype = p;
  return new f();
   
}
var p = inherit({y:2});
p.x = 1;
console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("y"));
console.log(Object.prototype.propertyIsEnumerable("toString"));


// !searching own

console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log(o.toString !== undefined);

//! in can distinguish that a property is undefined or dont have that property.
var o = {x:undefined}
console.log(o.x !== undefined);

console.log(o.y !== undefined);

console.log("x" in o);
console.log("y" in o);










