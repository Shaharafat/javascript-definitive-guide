var a = new Array("banana", "cherry", "apple");
// ! CALLING SORT WITHOUT ARGUMENT.
console.log(a.sort());
var b = new Array("rose", "rain", "right");
console.log(b.sort());


// ? If return value is less than 0. returns first one.
// ? If return value is greater than 0. returns second one first.
// ? If both value are equal. unchanged.
var a = [33, 4, 1111, 222];
console.log(a.sort());
console.log(a.sort(function (a, b) {
  return a - b;
}));
console.log(a);

console.log(a.sort(function (a, b) {
  return b - a;
}));

// ? Case Sensitive comparison.

a = ['ant', 'Bug', 'cat', 'Dog'];
console.log(a.sort());

console.log(a.sort(function(s,t){ 
  var a = s.toLowerCase();
  var b = t.toLowerCase();
  // console.log(s,t)
  console.log(a,b);
  if(a < b) return -1;
  if(a > b) return 1;
  return 0;
}));

console.log(a); //modifies actual array
