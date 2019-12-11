function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {};
  f.prototype = p;
  return new f();
}

var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
console.log(q.x + q.y);

var unitCircle = {r:1};
var c = inherit(unitCircle);
c.x = 1;
c.y = 1;
c.r = 2; //! This is own property of c
console.log(unitCircle.r); //!r OF UNITCHANGE IS UNCHANGED.
