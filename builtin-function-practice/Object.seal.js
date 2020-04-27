/*
	The Object.seal() method seals an object, 
	preventing new properties from being added 
	to it and marking all existing properties as 
	non-configurable. Values of present properties 
	can still be changed as long as they are writable.
*/

const object = {
	property:42
};
Object.seal(object);
object.property = 33;
console.log(object.property);
delete object.property;
console.log(object.property);

var obj = {
	prop: function(){},
	foo:'bar'
};

//New properties may be added, existing properties
// may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);
console.log(Object.isSealed(obj));

//changing property values on a sealed object still works.
obj.foo = 'quux';
console.log(obj);

// but cant convert data properties to accessors or vice versa.
Object.defineProperty(obj,'foo',{
	get:function(){return 'g';}
}); //throws typeerror

//Now any changes , other than to property values will fail.

obj.quaxxor = "the freindly duck";
//silently doesn't delete the property.
//... and in strict mode such attempts will throw typeerrors.
function fail(){
	'use strict';
	delete obj.foo; // throws a TypeError
	obj.sparky = 'arf'; //TypeError
}
fail();

//Attempted additions through Object.defineProperty will also throw.
Object.defineProperty(obj,'ohai',{
	value:17
}); // throws TypeError.


//comment our previous to see this lines working.
Object.defineProperty(obj,'foo',{value:'eit', writable:false});
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'foo'))
Object.defineProperty(obj,'foo',{value:'dt'});
console.log(obj.foo)