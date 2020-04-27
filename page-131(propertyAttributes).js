var random = {
  get octet(){return Math.floor(Math.random()*256);},
  get uint16() { return Math.floor(Math.random()*65536); }
}

console.log(Object.getOwnPropertyDescriptor({x:1},'x'));
console.log(Object.getOwnPropertyDescriptor(random,'octet'));
console.log(Object.getOwnPropertyDescriptor({y:2,z:3},'z'));


// Returns undefined for inherited properties and properties that don't exist.
console.log(Object.getOwnPropertyDescriptor({},'x'));

var o = {}; //start with no properties at all.
//Add a nonenumerable data property x with value 1.
Object.defineProperty(o,'x',{value:1,writable:true,enumerable:false,configurable:true});
console.log(o.x)
console.log(Object.getOwnPropertyDescriptor(o,'x'));
console.log(Object.keys(o))
Object.defineProperty(o,'x',{writable:false});
console.log(Object.getOwnPropertyDescriptor(o,'x'));
o.x = 2;
console.log(o.x);

Object.defineProperty(o,'x',{get: function(){return 0;}});
console.log(o.x);

// If you want to create or modify more than one property at a time, use Object.defineProperties().
var p = Object.defineProperties({},{
	x:{value:1,writable:true,enumerable:true,configurable:true},
	y:{value:1,writable:true,enumerable:true,configurable:true},
	r:{
		get: function(){return Math.sqrt(this.x * this.x + this.y * this.y)},
		enumerable:true,
		configurable:true
	}
});
console.log(p.r);

/*
 * Add a nonenumerable extend() method to Object.prototype.
 * This method extends the object on which it is called by copying properties
 * from the object passed as its argument. All property attributes are
 * copied, not just the property value. All own properties (even non-enumerable ones)
 * of the argument object are copied unless a property
 * with the same name already exists in the target object.
*/


 Object.defineProperty(Object.prototype,"extend",{
	writable:true,
	enumerable:false,
	configurable:true,
	value:function(o){ //Its value is this function.
		//Get all own props, even nonenumerable ones
		var names = Object.getOwnPropertyNames(o);
		console.log(names);
		//loop through them
		for(var i = 0; i < names.length; i++){
			//skip props already in this object.
			if(names[i] in this) continue;
			//Get property description from o.
			var desc = Object.getOwnPropertyDescriptor(o, names[i]);
			console.log(desc)
			// Use it to create property on this. 
			Object.defineProperty(this,names[i],desc);
		}
	}
});
 this.extend({arab:2,boy:3});
 console.log(Object.getOwnPropertyDescriptor(this,'boy'))