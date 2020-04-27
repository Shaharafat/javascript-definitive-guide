/*
 The Object.keys() method returns an array of a given object's own property names, 
 in the same order as we get with a normal loop.
*/
const object1 = {
	a: 'something',
	b: 42,
	c: false
};
console.log(Object.keys(object1));

/*
	Object.keys() returns an array whose elements 
	are strings corresponding to the enumerable
	properties found directly upon object
*/

//simple array
var arr = ['a','b','c'];
console.log(Object.keys(arr));

//array like object.
var obj = {0:'a',1:'b',2:'c'};
console.log(Object.keys(obj));
//array like object with random key ordering.
var anObj = {100:'a',2:'b',7:'c'};
console.log(Object.keys(anObj)); //maintain looping order

//getFoo is a property which isn't enumerable
var myObj = Object.create({getFoo:{
	value:function(){return this.foo;}
}});

myObj.foo = 1;
console.log(Object.keys(myObj))
console.log(Object.getOwnPropertyNames(myObj));
console.log(Object.getPrototypeOf(myObj));
console.log(myObj.getFoo);
