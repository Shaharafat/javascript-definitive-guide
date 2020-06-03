// // defining constructors
// function C() {}
// function D() {}

// var o = new C();

// // true, because: Object.getPrototypeOf(o) === C.prototype
// o instanceof C;
// // console.log(Ob);

// console.log(Object.getPrototypeOf(o));
// console.log(C.prototype);



// // false, because D.prototype is nowhere in o's prototype chain
// o instanceof D;

// o instanceof Object; // true, because:
// C.prototype instanceof Object // true

// C.prototype = {
//   test: function () {
//     console.log("testing prototype...");
    
//   }
// };
// console.log(C.prototype);

// var o2 = new C();

// o2 instanceof C; // true
// console.log(C.prototype.isPrototypeOf(o
// console.log(ObjecgetPrototypeOf(Rane.prototype = {}t);
// ));

// // false, because C.prototype is nowhere in
// // o's prototype chain anymore
// o instanceof C; 
// console.log(o);
// console.log(Object.getPrototypeOf(o));

// console.log(o instanceof C);
// // console.log(o.test());

// D.prototype = new C(); // add C to [[Prototype]] linkage of D
// var o3 = new D();
// // o3.test()
// o3 instanceof D; // true
// o3 instanceof C; // true since C.prototype is now in o3's prototype chain


// defining constructors
function C() {}
function D() {}

var o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// new
console.log(o instanceof C);
console.log(Object.getPrototypeOf(o));
console.log(C.prototype);




// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object // true

C.prototype = {};
// new
console.log(C.prototype);

var o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C; 

D.prototype = new C(); // add C to [[Prototype]] linkage of D
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true since C.prototype is now in o3's prototype chain

//new 
console.log(C.prototype);
