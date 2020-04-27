function inherit(p) {
  if (p == null) throw TypeError();
  // if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {};
  f.prototype = p;
  return new f();
}
// console.log(Object.create);
p = {
  x: 2,
  y: 3
};
console.log(typeof inherit(p));
var l = inherit(p);
console.log(l.x);
console.log(l.y);