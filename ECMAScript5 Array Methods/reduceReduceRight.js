var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function (x, y) {
  return x + y;
}, 0);
console.log(sum);

var product = a.reduce(function (x, y) {
  return x * y;
}, 1);
console.log(product);

var max = a.reduce(function (x, y) {
  return (x > y) ? x : y;
});

console.log(max);


// ? reduceRight()

var a = [2,3];
//? compute 2^(3^4)
var big = a.reduceRight(function(accumulator,value){
  return Math.pow(accumulator,value);
});
console.log(big);

function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}
/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values form p are used.
 */
function union(o, p) {
  return extend(extend({}, o), p);
}

var objects = [{x:1},{y:2},{z:3}];
var merged = objects.reduce(union);
console.log(merged);

var objectss = [{x:1,a:1},{y:2,a:2},{z:3,a:3}];
var leftunion = objectss.reduce(union);
var rightunion = objectss.reduceRight(union);
console.log(leftunion);
console.log(rightunion);

