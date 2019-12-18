var a = [ 1,2,3,,5];
b = a.map(function(x){
  return x*x; //? function must return a value. Map will create a new array. If array is sparse new array will remain sparse with same length.
});
console.log(b);
