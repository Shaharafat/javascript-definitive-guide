/*
	The Object.freeze() method freezes an object. 
	A frozen object can no longer be changed; 
	freezing an object prevents new properties from 
	being added to it, existing properties from being removed, 
	prevents changing the enumerability, configurability, 
	or writability of existing properties, and prevents the 
	values of existing properties from being changed. 
	In addition, freezing an object also prevents its 
	prototype from being changed. freeze() returns the 
	same object that was passed in.
*/

const obj = {
	prop: 42
};

Object.freeze(obj);
console.log(obj.prop);
try{
	'use strict';
	obj.prop = 33;
}catch(e){
	console.log(e);
}
console.log(obj.prop)

/* 
	values that are objects can still be modified, unless they are also frozen
		 
		 As an object, an array can be frozen; after doing so, its elements cannot be altered and no elements can be added to or removed from the array.
*/
var object = {
	prop: function(){},
	foo:'bar'
};

//New properties may be added, existing properties may be changed or removed.
object.foo = 'baz';
object.lumpy = 'woof';
delete object.prop;
console.log(object);

/*
	Both the object being passed as well as the returned
	object weill be frozen. It is unnecessart to save the returned
	object in order to freeze the original.
*/

var o = Object.freeze(object);
console.log(o === object);

//Now any changes will fail.
object.foo = 'quux'; //silently dows nothing.
//silently doesn't add the property.
object.quaxxor = 'the friendly duck';

// In strict mode such attempts will throw TypeErrors
// function fail(){
// 	'use strict';
// 	object.foo = 'sparky';
// 	delete object.foo;
// 	delete object.quaxxor;
// 	object.sparky = 'arf'
// }
// fail();

// //Attempted changes through Object.defineProperty;
// //both statements below throw a TypeError.
// Object.defineProperty(object,'ohai',{value:17});
// Object.defineProperty(object,'foo',{value:'eit'});

// //freezing arrays

// let a = [0];
// console.log(a)

// Object.freeze(a); //The array cannot be modified now.

// a[0] = 1;
// a.push(2);

// //In strict mode such attemprs will throw TypeErrors
// function fail(){
// 	'use strict'
// 	a[0] = 1;
// 	a.push(2);
// }
// fail();

/*
	The object being frozen is immutable. However, it is not necessarily constant. The following example shows that a frozen object is not constant (freeze is shallow).
*/
obj1 = {
	internal: {}
};
Object.freeze(obj1);
obj1.internal.a = 'aValue';
console.log(obj1.internal.a);