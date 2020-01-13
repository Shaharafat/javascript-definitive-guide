var scope = "global scope";

function checkScope() {
  var scope = "local scope";

  function f() {
    return scope;
  }
  return f();
}

console.log(checkScope());


var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function f() {
    return scope;
  }
  return f;
}

console.log(checkscope()());

var uniqueInteger = (function () {
  var counter = 0;
  return function () {
    return counter++;
  }
}());

console.log(typeof uniqueInteger);

console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());

/* 
 * Private variables like counter need not to a single closure: It is perfectly possile for 
 * two or more nested functions to be defined within the same outer function and share the * * * same scope chain. Consider the following code.
 */

// function counter() {
//   var n = 0;
//   return {
//     count: function () {
//       return n++;
//     },
//     reset: function () {
//       return n = 0;
//     }
//   };
// }

// var c = counter(),  d = counter();
// console.log(c.count());
// console.log(d.count());
// c.reset();
// console.log(c.count());
// console.log(d.count());
// console.log(c.count());



/* 
 * It is worth nothing here that you can combine this closure technique with property getters and setters The following version of the counter() function is a variation on code that appeared in . but it uses clousers for private state rather than relying on a regula object property.
 */

// function counter(n) {
//   return {
//     // Proptery getter method return and increments private counter var.
//     get count() {
//       return n++;
//     },
//     set count(m) {
//       if (m > n) n = m;
//       else throw Error("count can only be set to a larger value.");
//     }
//   };
// }

// var c = counter(1000);
// console.log(c.count);
// console.log(c.count);
// c.count = 2000;
// console.log(c.count);
// c.count = 2000; //? Throws error.



/* 
 * It is just as important to recognize when closures invadvertantly share access to a variable that they should nor share. Consider the following example:
*/

/*
// ? This function return a function that always return v.
function constfunc(v){ return function(){return v;} }

// ? Create an array of constant function:
var funcs = [];
for(var i = 0 ;i< 10;i++){
  funcs[i] = constfunc(i)
}
// ? The function at array element 5 returns the value 5.
console.log(funcs[5]());
*/

function constfuncs(){
  var funcs = [];
  for(var i = 0; i< 10 ; i++)
    funcs[i] = function (){ return i };
  return funcs;
}
var self = this;
var funcs =  constfuncs();
console.log(funcs[2]());


// ? private property accessor method using closure.

function addPrivateProptery(o,name,predicate){
  var value;
  // The getter method simply return the value.
  o["get"+name] = function(){
    return value;
  }

  // ? the setter method stores the value or throws an exceptions if the predicate rejects the value.
  o["set"+name] =function(v){
    if(predicate && !predicate(v))
      throw Error("set" + name + ": invalid value "+ v);
    else 
      value = v;
    };
  }


var o = {};
addPrivateProptery(o,"Name",function(x){ return typeof x == "string" });

o.setName("Frank");

console.log(o.getName());
o.setName(o);


