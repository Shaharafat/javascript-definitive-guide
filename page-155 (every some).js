//  The every() method is like the mathemarical 'for all' quantifier 
// it returns true. if and only if your predicare function returns true 
// for all elements in the array.

a = [1,2,3,4,5];	
let result = a.every(function(x){return x < 10});
console.log(result);
result = a.every(function(x){return x % 2 === 0});
console.log(result);


// The some() method is like the mathematical 'there exists' quantifier. it returns true if threre exists at least one element in the array for which the predicare returns true.
// and returns false if and only if the predicate returns false for alll alement of the array.
result = a.some(function(x){return x % 2 === 0});
console.log(result);