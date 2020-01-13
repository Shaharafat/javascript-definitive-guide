/* 
 * A higher order function is a function that operates on functions, taking one or more functions as 
 *  arguments and returning a new function. Here is an example:
*/

//! This higher order function returns a new function that passes its arguments to f and returns the logical negations of f's return value.

function not(f){
  return function(){
    // console.log(arguments);
    
    var result = f.apply(this,arguments);
    return !result;
  };
}

var even = function(x){
  return x%2 === 0;
}

var odd = not(even);
console.log(odd());

console.log([1,1,3,5,5].every(odd));


// ! mapper function.

/* 
 * Return a function that expects an array arguments and applies f to each element, returning the array 
 * of return values.
 * contrast this with the map() function from earlier.
*/
function mapper(f){
  return function(a){return a.map(f);}
}
var increment = function(x){return x+1;}
var incrementer = mapper(increment);
console.log(incrementer([1,2,3,4]));


/* 
 * Return a new function that computes f(g()).
 * The returned function h passes all of its arguments to f, and then passes the return
 * value of g to f, and then returns the return value of f. 
 * Both f and g are invoked with the same this value as h was iinvoked with.
*/

function compose(f,g){
  return function(){
    //? We use call for f because we're passing a single value and apply for g because we're passing an array of values. 
    return f.call(this,g.apply(this,arguments));
  };
}

var square = function(x) {return x*x};
var sum = function(x,y){return x+y};
var squareofsum = compose(square,sum);
console.log(squareofsum(2,3));
