/* 
 * Copy length elements of the array from to the array to. 
 * Begin copying with elements from start in the from array
 * and copy that element to to_start in the to array.
 * It is hard to remember the order of the arguments.
 */

function arrayCopy( /* array */ from, /* index */ from_start, /* array */ to, /* index */ to_start, /* integer */ length) {
  // ? code goes here.
  for(var i = 0; i<=length;i++){
    to[to_start] = from[from_start];
    to_start++;
    from_start++;
  }
}

/* 
 * This version is a little less efficient, but you don't have to remember the order of the
 * arguments, and from_start and to_start
 * default to 0.
 */

function easyCopy(args) {
  arrayCopy(args.from,
            args.from_start || 0,
            args.to,
            args.to_start || 0,
            args.length);
}
// ? Here is how you might invoke easyCopy():
var a = [1, 2, 3, 4, 5],
  b = [];

easyCopy({from:a,to:b,length:4});
console.log(b);
