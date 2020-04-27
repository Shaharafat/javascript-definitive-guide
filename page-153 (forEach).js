var data = [1,2,3,4,5];
//compute the sum of the array elements.
var sum = 0;
data.forEach(function(value){
	sum += value;
})
console.log(sum);
//Now increment each array element.
data.forEach(function(v,i,a){a[i] = v + 1;});
console.log(data)