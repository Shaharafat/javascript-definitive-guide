function factorial(x) {
  if (x < 0) {
    throw new Error("x must not be negative");
  }

  for (var f = 1; x > 1; f *= x, x--);
  return f;
}

// console.log(factorial(2));
try {
  factorial(-10);
} catch (ex) {
  console.log(ex);
} finally {
  console.log("Try catch finally feature is cool.");
}