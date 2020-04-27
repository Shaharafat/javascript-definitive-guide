let a = [0,1,2,3,4,1];
console.log(a.indexOf(1));
console.log(a.indexOf(3));
console.log(a.lastIndexOf(1));
console.log(a.indexOf(9)); //returns -1 if not found.

// Find all occurrences of a value x in an array a and return an array of matching indexes.
function findall(a,x){
	var results = [],
	len = a.length,
	pos = 0;
	while(pos < len){
		pos = a.indexOf(x,pos);
		if(pos === -1) break;
		results.push(pos);
		pos = pos + 1;
	}
	return results;
}
let result = findall(a,1);
console.log(result);