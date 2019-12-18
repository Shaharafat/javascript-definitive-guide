var a = [1,2,3,4,5,6,7,8];
a.splice(0,1);
console.log(a);
console.log(a.splice(3));
console.log(a);

var s1 = a.splice(3);
console.log(a);
a.splice(1,2);
console.log(a);
a.splice(0);
console.log(a);


var b = [1,2,3,4,5];
b.splice(2,0,'a','b');
console.log(b);
b.splice(1,2,[1,2],3); //? secon denotes how many to delete.
console.log(b);




