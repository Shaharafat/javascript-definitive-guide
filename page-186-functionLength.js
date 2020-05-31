// This function uses arguments.callee. so it wont work in strict mode.
function check(args) {
  var actual = args.length;
  var expected = args.callee.length;
  if (actual !== expected)
    throw Error(`Expected ${expected} args; got ${actual}`);
}

function f(x, y, z) {
  check(arguments); // check that the actual number of args matches expected number of args
  return x + y + z;
}

let result = f(2, 3, 3);
console.log(result);

