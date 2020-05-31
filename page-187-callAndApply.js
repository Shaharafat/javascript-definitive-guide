// Note apply() works with array like objects as well as true arrays.
// In particular, you can invoke a function with the same arguments as the
// current function by passing the arguments array directly to apply()

// Replace the method named m of the object o with aversion that logs
// messages before and after invoking the original method.

function trace(o, m) {
  var original = o[m]; // remember original method in the closure
  
  o[m] = function () {
    // Now define the new method.
    console.log(new Date(), "Entering: ", m); // log message.
    var result = original.apply(this, arguments);
    console.log(new Date(), "Exiting: ", m);
    return result;
  };
  
}
let obj = {
  test: function () {
    console.log("test...");
    
  }
}
trace(obj, test)

// console.log(obj.test());
obj.test()

// console.log(res);
