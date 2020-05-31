function array(a, n) {
  return Array.prototype.slice.call(a,n||0)
}


// THe arguments to this function serve as a template. Undefined values
// in the argument list are fulled in with values from the inner set.
function partial(f /*.,...*/) {
  var args = arguments; // save the outer arguments array.
  return function () {
    var a = array(args,1)
    var i = 0, j = 0
    // loop through those args, fulling in undefined values from innner
    for (; i < a.length; i++){
      if (a[i] === undefined) {
        a[i]= arguments[j++]
      }
    }
    // Now append any remaining inner arguments.
    a = a.concat(array(arguments,j))
    return f.apply(this,a)
  }
}
let f = function(x,y,z){return x*(y-z)}
let res = partial(f,undefined,2)(3,4)
console.log(res);
