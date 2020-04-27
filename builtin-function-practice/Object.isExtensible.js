// New objects are extensible
var empty = {};
console.log(Object.isExtensible(empty));

//.. but that can be changed.
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty));

//Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
console.log(Object.isExtensible(sealed));

//Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
console.log(Object.isExtensible(frozen));

/*
 In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError. In ES2015, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.

	Object.isExtensible(1);
	// TypeError: 1 is not an object (ES5 code)

	Object.isExtensible(1);
	// false                         (ES2015 code)
*/