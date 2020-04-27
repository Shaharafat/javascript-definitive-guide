let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
console.log(Object.getOwnPropertyDescriptor(obj,'a'));
Object.seal(obj);
console.log(Object.getOwnPropertyDescriptor(obj,'a'));
console.log(Object.isSealed(obj));

//Create a sealed object with a frozen prototype and a nonenumerable property
var o = Object.seal(Object.create(Object.freeze({x:1}),{y:{value:2,writable:true}}));
console.log(o.x);
console.log(Object.getOwnPropertyDescriptor(o,'y'));
Object.defineProperty(o,'y',{value:3,writable:true});
console.log(Object.getOwnPropertyDescriptor(o,'y'));
