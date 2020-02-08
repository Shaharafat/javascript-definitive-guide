/* 
 * In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
*/

// In web browsers, the window object is also the global object:
// console.log(this === window); // true

// a = 37;
// console.log(window.a); // 37

// this.b = "MDN";
// console.log(window.b)  // "MDN"
// console.log(b)         // "MDN"

/* 
 * In strict mode, however, the value of this remains at whatever it was set to when entering the execution context, so, in the following case, thiswill default to undefined. 
 */

function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined; // true

// ====================

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

// ================

/* 
 * Where a function uses the this keyword in its body, its value can    be bound to a particular object in the call using the call() or      apply() methods which all functions inherit from                     Function.prototype. 
 */ 

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34

// =================

/* 
 *Note that with call and apply, if the value passed as this is not an object, an attempt will be made to convert it to an object using the internal ToObject operation. So if the value passed is a primitive like 7 or 'foo', it will be converted to an Object using the related constructor, so the primitive number 7 is converted to an object as if by new Number(7) and the string 'foo' to an object as if by new String('foo'), e.g.
*/

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]

// ===================

/* 
 * The bind method
 *ECMAScript 5 introduced Function.prototype.bind(). Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.
*/

function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty 

// ===========

// Create obj with a method bar that returns a function that
// returns its this. The returned function is created as 
// an arrow function, so its this is permanently bound to the
// this of its enclosing function. The value of bar can be set
// in the call, which in turn sets the value of the 
// returned function.
var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// Call bar as a method of obj, setting its this to obj
// Assign a reference to the returned function to fn
var fn = obj.bar();

// Call fn without setting this, would normally default
// to the global object or undefined in strict mode
console.log(fn() === obj); // true

// But caution if you reference the method of obj without calling it
var fn2 = obj.bar;
// Then calling the arrow function this is equals to window because it follows the this from bar.
console.log(fn2()() == window); // true