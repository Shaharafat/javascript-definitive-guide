console.log([1,2,3].toString());
console.log((function(x){f(x);}).toString());
console.log(/\d+/g.toString());
console.log(new Date(2010,0,1).toString());


console.log([1,2,3].valueOf()); // !array inherit the valueOf() method.
console.log([].toString());
console.log("".toString());


var now = new Date(); 
console.log(typeof(now + 1));
console.log(typeof(now - 1));
console.log(now == now.toString());

// console.log(now.toString());
console.log(now > (now - 1));







