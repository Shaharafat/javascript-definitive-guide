function square(x) {
  return x * x;
}

var s = square;
console.log(square(4));
console.log(s(4));


var o = {
  square: function (x) {
    return x * x;
  }
};
var y = o.square(16);
console.log(y);

var a = [function (x) {
  return x * x;
}, 20];
var z = a[0](a[1]);
console.log(z);


// ? We define some simple function here.
function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function division(x, y) {
  return x / y
}

// ! Here's a function that takes one of the above functions.as an 
// ! argument and invokes it on two operands.
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
}

console.log(operate(add, 2, 3));

// ! we could invoke this function like this to compute the value
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i);


/* 
 * For the sake of the example, we implement the simple functions again, 
 * this time using function literals within an object literal;
 */

var operators = {
  add: function (x, y) {
    return x + y
  },
  subtract: function (x, y) {
    return x - y
  },
  multiply: function (x, y) {
    return x * y
  },
  division: function (x, y) {
    return x / y
  },
  pow: Math.pow, //? joss concept
}

/* 
 * This function takes the name of an operator, looks yp that operator
 * in the object, and then inbokes it on the supplied operands. Nore
 * the syntax used to invoke the operator function
 */

function operate2(operation, operand1, operand2) {
  if (typeof operators[operation] === "function")
    return operators[operation](operand1, operand2);
  else
    throw "unknown operator";
}

console.log(operate2("add",1,2));

// ! Compute the value ("hello" + " " + "world") like this:
var j = operate2("add", "hello", operate2("add", " ", "world"));
// ! Using the predefined Math.pow() function:
var k = operate2("pow",10,2);
console.log(j);
console.log(k);


