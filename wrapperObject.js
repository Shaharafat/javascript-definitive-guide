var s = "test";
// var t = s.length;
// console.log(s.length);
// var t = s.length;
// console.log(t);

s.len = 4;
var t = s.len;
console.log(t);

var ss = "test",n = 1,b = true;
ss.len = 4;
var SS = new String(ss);
var N = new Number(n);
var B = new Boolean(b);

console.log(B);
console.log(SS);
console.log(N);

console.log(ss === SS);

console.log(typeof ss);
console.log(typeof SS);
SS.len = 4;
console.log(SS.len);

console.log(typeof n);
console.log(typeof N);
console.log(typeof b);
console.log(typeof B);

console.log(typeof(typeof (SS)));
// example of wrapper object.
