var a = [5,4,3,2,1];
smallValues = a.filter(function(x){
  return x<3;
});
console.log(a);
console.log(smallValues);

everyOther = a.filter(function(x,i){
  return (i % 2) == 0;
})
console.log(everyOther);

// ? filter() skips missing elements in sparse arrays and that its return value is always dense.. To close the gaps in a sparse array.

var sparse = [1,2,3,,4,,5];
var dense = sparse.filter(function(){
  return true;
});
console.log(dense);
console.log(sparse);


var a = sparse.filter(function(x){
  return x !== undefined && x !== null;
})
console.log(a);
