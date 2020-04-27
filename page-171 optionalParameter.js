//Append the names of the enumerable properties of object o to the 
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, /* optional */ a){
	// if(a === undefined){
	// 	a = [];
	// }
	a = a || []; //short curcuit notation.
	for(var property in o) a.push(property);
		return a;
}

o = {
	a:1,b:2,c:3
}

p = {
	d:4,
	e:5,
	f:6
}

// This function can be invoked with 1 or 2 parameters.
var a = getPropertyNames(o); //Get o's properties into a new array.
getPropertyNames(p,a);
console.log(a);