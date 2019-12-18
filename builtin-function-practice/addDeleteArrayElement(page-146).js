var a = [];
a.push("zero");
a[1] = "one";
console.log(a);
a.push("two","three");
console.log(a);

//? unshift() used to insert an element to the front of the array.
a.unshift(1);
console.log(a);
console.log(a.length);

delete a[0];

//? delete doesn't affect the array length.
console.log(a.length);

console.log(a);
a.unshift(1);
console.log(a.pop());
console.log(a.length);
console.log(a.shift());
console.log(a);
console.log(a.length);