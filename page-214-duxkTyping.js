// Return true if o implements the method specified by the remaining args.
function quacks(o /*,...*/) {
  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];
    switch (typeof arg) {
      case "string":
        if (typeof o[arg] !== "function") return false;
        continue;
      case "function": // function: use the prototype object instead.
        // If the argument is a function  we use its prototype object.
        arg = arg.prototype;
      // fall through to the next case.
      case "object": // object : check for matching methods.
        for (var m in arg) {
          if (typeof arg[m] !== "function") continue; // skip non-methods
          if (typeof o[m] !== "function") return false;
        }
    }
  }
  // If we are still here. then o implements everything.
  return true;
}

var arr = [10,20,30]
for (var l in arr) {
  console.log(arr[l]);
  
}