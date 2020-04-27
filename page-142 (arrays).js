var a = new Array(10); //one argument says the length
console.log(a);
var b = new Array(1,2,3,4,5); //multiple argument says elements.
console.log(b);
let o = {};
o[1] = "one"; //if you place string in place of 1 you must quote this
var arr = [];
arr['val'] = 2;
arr[0] = 1;
arr['test'] = 3;
console.log(arr.length)


// Sparse array
let array = [,,];
console.log(array.length);
console.log(array[0],array[1]);
console.log(0 in array);
let arrays = [1,,3];
console.log(arrays)