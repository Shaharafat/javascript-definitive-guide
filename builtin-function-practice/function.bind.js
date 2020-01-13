function f(y){
  return this.x +y;
}
var o = {x:1}
var g = f.bind(o); // now f is a method of o. means g = o.f();
console.log(g(2));
// if(f.bind){
//   return console.log(true);
// }

function test(a){
  console.log(typeof arguments);
  
}
test(10);

/* 
 * The ECMAScript 5 bind() method does more than just bind a function to an object. It also performs partial application: any arguments you pass to bind() after the first are bound along with the this balue. Partial application is  a common technique in functional programming and is sometimes called curring. Here are some examples of the bind() method used for partial application.
*/

var sum = function(x,y){return x + y} //Return the sum of 2arguments.
//? create a new functio like sum, but with the this value bound to null
//? and the 1st arguments bound to 1. This new function expects just one arg.
var succ = sum.bind(null,1);
console.log(succ(2));
 //? -> 3 : x is bound to 1, and we pass 2 for the y argument.

function f(y,z){return this.x + y + z}
var g = f.bind({x:1},2);
console.log(g(6));
