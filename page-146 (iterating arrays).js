//Iterating array

//Most common way is for loop.
var o = {name:'Arafat', roll: '354',class:'ix'}
var keys = Object.keys(o);
console.log(keys);
console.log(keys[1]);
var values = [];
for(var i = 0; i < keys.length; i++){
	var key = keys[i];
	values[i] = o[key];
}
console.log(values);

var arr = ['a','b',null,'d',,'f',,'h'];

//skip null, undefined, and nonexistent elements.
for(var i = 0 ; i < arr.length; i++){
	if(!arr[i]) continue;
	console.log(arr[i]);
}

//skip undefined + nonexistent elements
for(var i = 0 ; i < arr.length; i++){
	if(arr[i] === undefined) continue;
	console.log(arr[i]);
}
console.log(arr[4]);

// skip non existent element
for(var i = 0 ; i < arr.length; i++){
	if(!(i in arr)) continue;
	console.log(i)
}

//you can also use a for/in loop with sparse arrays. This loop assigns enumerable property names to the loop variable one at a time.
//indexes that donot exist will not be iterated.

for(var index in arr){
	var value = arr[index];
	// console.log(value);
	// console.log(index);
	if(!arr.hasOwnProperty(index)) console.log(index);
}

//forEach loop
var data = [1,2,3,4,5];
var sumOfSquares = 0;
data.forEach(function(x){
	console.log(x*x)
	sumOfSquares += x*x;
});
console.log(sumOfSquares)