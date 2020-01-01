// ! print the name and value of each property.
function printprops(o) {
  for (var p in o) console.log(p + ": " + o[p] + "\n");
}

printprops({x:1,y:2,z:3});

//? Compute the distance Cartesian points (x1,y1) and (x2,y2).
function distance(x1,y1,x2,y2){
  var dx = x2-x1;
  var dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}

function factorial(x){
  if(x <= 1) return 1;
  return x * factorial(x-1);
}

var square = function(x){
  return x*x;
}

// ? Function expressions can include names, which is useful for recursion.
var f = function fact(x){
  if(x<=1) return 1;
  else return x* fact(x-1);
};

console.log(f(4));


// ? Function expressions can also be used as arguments to other functions:
// data.sort(function(a,b){return a-b;});

// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function(x){return x*x;}(10));
console.log(tensquared);
