var empty = []; //?An array with no elements.

var primes = [2, 3, , 5, 6, 77]; //? An array with 5 numeric elements.

var misc = [1, 1, true, "a", ]; //? 3 elements of various types + trailing comma.

//? The values in an array literal need not be constants; they may be arbitrary expressions.
var base = 1024;
var table = [base, base + 1, base + 2, base + 3];

//? Array literals can contain object literal or other array literals.
var b = [
  [1, {
    x: 1,
    y: 2
  }],
  [2, {
    x: 3,
    y: 4
  }]
];

var count = [1,,3]; //?Elements at indexes 0 and 2 . count[1] => undefined.

var undefs = [ ,, ]; //? An array with no elements but a length of 2. !last comma is trailing comma.

//Array constructor.
var a = new Array(); //? Call it with no arguments. empty array.

var a = new Array(10) //? Call it with a single numeric argument. which specifies a length.

console.log(a.length);

var a = new Array(5,4,3,2,"testing, testing");
console.log(a.length);
