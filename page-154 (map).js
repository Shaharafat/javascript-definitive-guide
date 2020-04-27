a = [1,2,3];
b = a.map(function(x){return x*x}); //returns new and modified array. map must return a value. <3 if the array is
//sparse it remains sparse in the new array. that means length will be same.
console.log(b);