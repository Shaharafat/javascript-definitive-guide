//Initialize the counter property of the funciton object .
// Function declaration are hoiseted so we really can 
// do this assignment before the funciton declaration.

uniqueInteger.counter = 0

// This function returns a different integer each time it is called. 
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
  return uniqueInteger.counter++;
}

console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
// ================================================== 

// compute factorials and cache results as properties of the function itself.
function factorial(n) {
  if (isFinite(n) && n > 0 && n == Math.round(n)) {
    if (!(n in factorial)) {
      factorial[n] = n * factorial(n - 1)

      // console.log(factorial[3]);
    }

    return factorial[n];

  } else return NaN;

}

// console.log(factorial[]);
console.log(factorial[1]);


factorial[1] = 1 // initialize the cache to hold this base case

console.log(factorial(5));
console.log(factorial[5]);

console.log(factorial);