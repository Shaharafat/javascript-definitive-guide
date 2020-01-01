var factorial = function(x){
  if(x <= 1) return 1;
  // ? caller property gives access to call stack. callee property is occasionally useful to allow unnamed function to call themselves recursively.
  return x * arguments.callee(x - 1);
}

console.log(factorial(4));
