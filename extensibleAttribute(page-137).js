var p = {x:1};


console.log(Object.isExtensible(p));
console.log(Object.preventExtensions(p));
console.log(Object.isExtensible(p));