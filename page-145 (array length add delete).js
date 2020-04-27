console.log([].length);
console.log(['a','b','b'].length);

a = [1,2,3,4,5];
console.log(a.length);
a.length = 3;
console.log(a);
a.length = 0;
console.log(a);
a.length = 5
console.log(a)

//In ES5, you can make the length property of an array read-only with Object.defineProperty().
arr = [1,2,3];
Object.defineProperty(arr, 'length',{writable:false});
arr[3] = 4
arr.length= 2
console.log(arr)

//add delete element

a = [];
a.push('zero');
a.push('one','two');
console.log(a);
a.unshift('minus one');
console.log(a);
a.shift();
console.log(a);
delete a[1];
console.log(a);
a.unshift('minus one');
console.log(a);