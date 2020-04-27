const object1 = {};
Object.preventExtensions(object1);
try {
    Object.defineProperty(object1, 'property1', {
        value: 42
    });
} catch (e) {
    console.log(e);
}
//mdn examples
var obj = {};
var obj2 = Object.preventExtensions(obj);
console.log(obj === obj2);
console.log(Object.isExtensible(obj, obj2))
//objects are extensible by default
var empty = {};
console.log(Object.isExtensible(empty));
//... but that can be changed
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty));
// Object.defineProperty throws when adding a new proptery to a non-extensible object.
var nonExtensible = {
    removable: true
};
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, 'new', {
    value: 565676
}); //Throws typeError
//In strict mode, attempting to add new properties to a non-extensible object throws a typeEttor.
console.log(nonExtensible);
function fail() {
        'use strict';
        //throws a typeError
        nonExtensible.newproptery = "FAIL";
    }
try {
    
    fail();
} catch (e) {
    console.log(e);
}