function isArrayLike(o) {
  if (o &&
    typeof o === "object" &&
    isFinite(o.length) &&
    o.length >= 0 &&
    o.length === Math.floor(o.length) &&
    o.length < 4294967296)
    return true;
  else
    return false;
}

/* 
 * Return the sum of the elements of array (or array=like object) a.
 * The elements of a must all be numbers or null and undefined are ignored.
 */

function sum(a) {
  if (isArrayLike(a)) {
    var total = 0;
    for (var i = 0; i < a.length; i++) {
      var element = a[i];
      if (element == null) continue;
      if (isFinite(element)) total += element;
      else throw new Error("sum(): elements must be finite numbers");
    }
    return total;
  } else throw new Error("sum(): argument must be array-like");
}

// console.log(sum(function () {
//   console.log("array");
// }));


function flexiSum(a) {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i],
      n;
    if (element == null) continue; //! Ignore null and undefined arguments.
    if (isArrayLike(element))
      n = flexiSum.apply(this, element);
    else if (typeof element === "function")
      n = Number(element());
    else n = Number(element);

    if (isNaN(n)) //? If we couldn't convert to a number, throw an error.
      throw Error("flexiSum(: can't convert " + element + " to number");
    total += n;
  }
  return total;
}

console.log(flexiSum([1,2,3,,4]));