/* 
 * A utility function to convert an array-like object (or suffix of it) to a true array . Used below to convert arguments objects to real arrays.
*/

function array( a, n ){return Array.prototype.slice.call(a, n || 0);}

// ? The arguments to this function are passed on the left.
function partialLeft(f /* ,... */){
  var args = arguments;
  console.log(arguments);
  
  return function(){
    console.log(arguments);
    
    var a = array(args,1);
    a = a.concat(array(arguments));
    return f.apply(this,a);
  };
}

// ? The arguments to this function are passed on the right.
function partialRight(f /* ,... */){
  var args = arguments;
  return function(){
    var a = array(arguments);
    a = a.concat(array(args,1));
    return f.apply(this,a);
  };
}

// ? The arguments to this function serve as a template. Undefined values in the argument list are filled in with values from the inner set.

function partial(f /* , ... */){
  var args = arguments;
  console.log(args);
  
  return function(){
    var a = array(args,1);
    console.log(a);
    
    var i = 0, j= 0;
    //?Loop through those args, filling in undefined values from inner.
    for(; i< a.length; i++){
      if(a[i] === undefined) a[i] = arguments[j++];
    }
    // ? Now append any remaining inner arguments.
    a = a.concat(array(arguments,j))
    return f.apply(this,a);
  };
}

// ? Here is a function with three arguments.
var f = function(x,y,z){return x* (y-z)};
// ? Notice how these three partial application differ.
partialLeft(f,2)(3,4);
partialRight(f,2)(3,4);
partial(f,undefined,2)(3,4);
