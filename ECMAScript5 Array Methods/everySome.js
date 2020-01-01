a = [1,2,3,4,5];
var result = a.every(function(x){
  return x < 10; //? If all the element returns true for this condition. TRUE
});
console.log(result);

var result = a.every(function(x){
  return x%2 === 0;
});
console.log(result);


// ? some 

a = [1,2,3,4,5];
var r = a.some(function(x){
  return x%2 === 0; //? if at least one returns true for this condition. then its true.
});
console.log(r);

console.log(a.some(isNaN));

