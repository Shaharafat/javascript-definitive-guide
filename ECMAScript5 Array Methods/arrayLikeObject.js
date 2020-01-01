var a = {};
//! Add properties to make it "array-like".
var i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;
// Now iterate through it as if it were a real array.
var total = 0;
for (var j = 0; j < a.length; j++) {
  total += a[j];
}
console.log(total);

//? Test for object that works like arrays.

/* 
 * Determine if o is an array-like object.
 * Strings and functions have numeric length properties, but are
 * excluded by the typeof test. In client-side javascript, DOM text
 * nodes have a numeric length property and may need to be excluded 
 * with an additional o.nodeType != 3 test.
 */

function isArrayLike(o) {
  if (o &&
    typeof o === "object" &&
    isFinite(o.length) &&
    o.length >= 0 &&
    o.length === Math.floor(o.length) &&
    o.length < 4294967296)
    return true;
  else
    return false;
}
console.log(isArrayLike(a));
