var a = [1,2,3,4,5];
a.length = 3;
console.log(a);
a.length = 4;
console.log(a);

a.length = 0;
console.log(a);

//? In ECMAScript 5, you can make the length property of an array read-only with Object.defineProperty().
a = [1,2,3]
Object.defineProperty(a,"length",{ value: 1,
  writable:false,
});
a.length = 0; //! UNCHANGED. 
console.log(a); // ! :p
