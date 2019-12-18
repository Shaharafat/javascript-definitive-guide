var a = ["world"];
var value = a[0];
a[1] = 3.14;
i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a);
console.log(a["2"]);

a[-1.23] = true;
console.log(a[-1.23]);
a["1000"] = 0;
console.log(a[1.000]);
console.log(a);


//? JS arrays have no notion "out of bounds" error. When you try to query a nonexistent property of any object. You don't get an error, you simply get undefined. This is just as true for arrays as it is for objects.

console.log(a[-1]);
console.log(a[10000]);

