// ? Append the names of the enumerable properties of object o to the array a, and return array a,
// ? and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, /* optional */ a){
  if(a === undefined) a = []; //? a = a || []
  for(var property in o) a.push(property);
  return a;
}

// ? This function can be invoked with 1 or 2 arguments.
var o = {x:1,y:2,z:3};
var a = getPropertyNames(o);
console.log(a);
var p = {a:4,b:5,c:6};
console.log(getPropertyNames(p,a));
