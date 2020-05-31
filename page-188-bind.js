// the primary purpose of bind() is to bind a function to an object.
// when you invoke the bind() method on a function f and pass an
// object o, the method returns a new function.

function f(y) {
  return this.x + y;
}

var o = { x: 1 };
var g = f.bind(o);

console.log(f.apply(o, [2]));

console.log(g(2));
console.log();

// ES5 bind method dows more than just bind a function to an object. It also performs partial application: any arguments you pass to
// bind() after the first are bound along with the this value

var sum = function (x, y) {
  return x + y;
};

// create a new function like sum, but with the this value bound to null
// and the first argument bound to 1, this new function expects ust one arg.

var succ = sum.bind(null, 1);
console.log(succ(2));


console.log(succ.toString());


function f(y, z) {
  return this.x+y+z
}
var g = f.bind({x:1},2)

console.log(g(2));
console.log(f.toString());

console.log(g.toString());
