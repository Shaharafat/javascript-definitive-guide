var data = [1, 2, 3, 4, 5];
//? Compute the sum of the array elements.
var sum = 0;
data.forEach(function (value) {
  sum += value;
});
console.log(sum);


//Now increment each array element.
data.forEach(function (v, i, a) { //? equivalent to function(value,index,array){}
  a[i] = v + 1;
});
console.log(data);


//!TERMINATE forEach() EARLY
function foreach(a,f,t){
  try{
    a.forEach(f,t);
  }catch(e){
    if(e === foreach.break) return ;
    else throw e;
  }
}
foreach.break = new Error("StopIteration")

console.log(foreach(data,function(value){
  sum += value;
},new Error()));

