// ? This function uses arguments.callee, so it wont work in strict mode.
function check(args){
  var actual = args.length;
  console.log(args.length);
  console.log(args);
  
  var expected = args.callee.length;
  
  if(actual !== expected){
    throw Error("Expected "+ expected + "args; got " + actual);
  }
}

function f(x,y,z){
  check(arguments);
  console.log(f.length);
  console.log(arguments.length);
  
  console.log(arguments.callee.length);
  
  return x+y+z;
}

console.log(f(1,2,3));
