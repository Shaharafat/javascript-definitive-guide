var s = "test";
console.log(s.charAt(0));
console.log(s[1]); //you can use index instead of chatAt()

//keep in mind that string are immutable value, so when they are treated as arrays, they are readonly arrays. Array methods
// like push(), sort(), reverse(), modify an array in place and do not work on strings. Attempting to modify a string using an array
// method does not. However, cause an error, it simply fails silently.

s = 'javascript'
console.log(Array.prototype.join.call(s, ' => '));
console.log(Array.prototype.filter.call(s,function(x){
	return x.match(/[^aeiou]/);;
}).join(''))