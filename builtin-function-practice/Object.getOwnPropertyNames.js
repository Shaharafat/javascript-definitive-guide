const Object1 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(Object.getOwnPropertyNames(Object1));
/*
 Object.getOwnPropertyNames() returns an array 
 whose elements are strings corresponding to the 
 enumerable and non-enumerable properties found 
 directly upon obj. The ordering of the enumerable 
 properties in the array is consistent with the ordering 
 exposed by a for...in loop (or by Object.keys()) 
 over the properties of the object. 
 The ordering of the non-enumerable properties 
 in the array, and among the enumerable properties, 
 is not defined.
*/
var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort());
//Array like object
var obj = {
    0: 'a',
    1: 'b',
    2: 'c'
};
console.log(Object.getOwnPropertyNames(obj).sort());
//Loffing property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, index, array) {
    console.log(val + ' -> ' + obj[val]);
});
//non-enumerable property
var my_obj = Object.create({}, {
    getFoo: {
        value: function() {
            return this.foo;
        },
        enumerable: false
    }
});
my_obj.foo = 1;
console.log(Object.getOwnPropertyNames(my_obj).sort());

//Items on the prototype chain are not listed
function ParentClass(){};
ParentClass.prototype.inheritedMethod = function(){};
function ChildClass(){
	this.prop = 5;
	this.method = function(){};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function(){};

console.log(
	Object.getOwnPropertyNames(
		new ChildClass()
		)
	);
console.log(Object.getPrototypeOf(ChildClass));
console.log(Object.getPrototypeOf(ParentClass));

if(ParentClass.prototype.inheritedMethod in ParentClass){
	console.log("Yes! It exists");
}
//একটা কোড বাকী আছে MDN এর। কিভাবে নন ইনুমারেবল প্রোপার্টি বের করবো। ফিল্টার ব্যবহার করে।