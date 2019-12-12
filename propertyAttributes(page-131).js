var random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
  get uint16() {
    return Math.floor(Math.random() * 65536);
  },
  get int16() {
    return Math.floor(Math.random() * 65536) - 32786
  }
};

console.log(Object.getOwnPropertyDescriptor({
  x: 1
}, "x"));
console.log(Object.getOwnPropertyDescriptor(random, "octet"));

console.log(Object.getOwnPropertyDescriptor({}, "x"));
console.log(Object.getOwnPropertyDescriptor({}, "toString"));


// ? To set the attributes of a property , or to create a new property with the specified attributes, 
//! call "Object.defineProperty()", passing the object to be modified, the name of the property ot be created or altered, and the property descriptor object.

var o = {};
//! Add a non enumerable daa property x with value 1.
Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true,
});

// ? Check that the property is there but is nonenumerable.
console.log(o.x);
console.log(Object.keys(o)); //because this property x is not enumerable.

// ?Now modify the property x so that it is read only.
Object.defineProperty(o, "x", {
  writable: false
});

// Try to change the value of the property.
o.x = 2; //fails silently.
console.log(o.x);

// ? property is still configurable . So we can change its value like this.
Object.defineProperty(o, "x", {
  value: 2
});
console.log(o.x);

// ? Now change x from a data property to an accessor property
Object.defineProperty(o, "x", {
  get: function () {
    return 0;
  }
});
console.log(o.x);

//! if you want to create or modify more than one property at a time, use "Object.defineProperties()" .
var p = Object.defineProperties({}, {
  x: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  y: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  r: {
    get: function () {
      return Math.sqrt((this.x * this.x) + (this.y * this.y))
    },
    enumerable: true,
    configurable: true,
  }
});



// ! copying property attribute.

/* 
 * Add a nonenumerable extend() method to Object.prototype.
 * This method extends the objects on which it is called by copying properties
 * from the object passed as its arguments. All property attributes are copied, not just the 
 * property value. All own properties (even non-enumerable ones) of the argument object are copied * unless a property with the same name already exists in the target object.
 */

Object.defineProperty(Object.prototype, "extend", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function (o) {
    //Its value is in this function.
    //Get all own props, even non enumerable ones.
    var names = Object.getOwnPropertyNames(o);
    //Loop through them
    for (var i = 0; i < names.length; i++) {
      //skip props already in this Object
      if (names[i] in this) continue;
      //Get property description from o
      var desc = Object.getOwnPropertyDescriptor(o, names[i]);
      //Use it to create property on this
      Object.defineProperty(this, names[i], desc);
    }
  }
});