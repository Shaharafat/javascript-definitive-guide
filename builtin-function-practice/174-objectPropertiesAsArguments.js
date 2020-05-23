//! Copy length elements of the array from to the array to.
//! BEgin copying with element from_start in the from array
//! and copu that element to to_start in the to array. 
//! it is hard to remember the order of the arguments.
function easyCopy(args) {
  arrayCopy(args.from,
    args.from_start || 0,
    args.to,
    args.to_start || 0,
    args.length);
}
function arrayCopy(/* array */ from, /* index */ from_start,/* array */ to,/* index */ to_start,/* integer */ length) {
  for (from_start; from_start <= length; from_start++){
    to.push(from[from_start]);
  }  
  console.log(to);
  
}



var a = [1, 2, 3, 4, 5], b = [];
easyCopy({from:a,to:b,length:4})