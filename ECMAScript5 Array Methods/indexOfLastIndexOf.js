a = [0,3,1,2,1,0];
console.log(a.indexOf(1));;
console.log(a.lastIndexOf(1));

console.log(a.indexOf(3,-3)); //! if not found. then returns -1.


//? Find all occurrences of a value x in an array a and return an array of matching indexes.
function findAll(a,x){
  var result = [],
      len = a.length,
      pos = 0;
  while(pos < len){
    pos = a.indexOf(x,pos);
    if(pos === -1) break;
    result.push(pos);
    pos = pos + 1;
  }
  return result;
}


console.log(findAll([1,2,3,2,1,3,,2,,2,4,2,2,4,,2,4],2));
