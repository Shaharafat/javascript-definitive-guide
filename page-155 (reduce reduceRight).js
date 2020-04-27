var a = [1,2,3,4,5];
var sum = a.reduce(function(x,y){return x+y}, 0);
console.log(sum);
var product = a.reduce(function(x,y){return x*y},1);
console.log(product);
var max = a.reduce(function(x,y){return (x>y)?x:y});
console.log(max);

//reduceRight
var a = [2,3,4];
// /compute 2^(3^4). exponentiation has right to left precedence.
var big = a.reduceRight(function(accumulator,value){
	return Math.pow(value,accumulator);
})
console.log(big)