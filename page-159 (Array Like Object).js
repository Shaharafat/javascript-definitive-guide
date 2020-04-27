var a = {}; //Start with a regular empty object.
//Add properties to make it 'array like'
var i = 0;
while(i < 10){
	a[i] = i * i;
	i++;
}
// console.log(a);
a.length = i; //length must be fixed to make an array like object.
// Now iterate through it as if it were a real array.
var total = 0;
for(var j = 0; j < a.length; j++){
	total += a[j];
}
console.log(total);

//ES5 array methods are generic are directly defined in Array constructor. not in Array.prototype.
var a = {'0':'a','1':'b','2':'c','3':'d','4':'e',length:3};
console.log(a)
console.log(Array.prototype.join.call(a,","));
console.log(Array.prototype.slice.call(a,0,3 ));
console.log(Array.prototype.map.call(a,function(x){
	return x.toUpperCase();
})); //Actually ES5 way is wrong. dont mind :p