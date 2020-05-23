var factorial = function (x) {
  if (x <= 1) return 1;
  //? callee refers to the function which is running now...
  return x * arguments.callee(x - 1);

}
console.log(factorial (3));
