/*
 * SYNTAX OF ACCESSOR PROPERTIES
 * var o = {
 * // An ordinary data property
 * data_prop : value;
 * 
 * // An accessor property defined as a pair of functions
 * get accessor_prop(){ // function body here },
 * set accessor_prop(value) { // function body here }
 * }
 */

function inherit(p){
  if (p == null) throw TypeError();
  if(Object.create) return Object.create(p);
  var t = typeof p;
  if(t !== "object" && t !== "function") throw TypeError();
  function f(){};
  f.prototype = p;
  return new f();
   
}


var p = {
  // ! x and y are regular read-write data properties.
  x: 1.0,
  y: 2.0,

  //! r is a read-write accessor property with getter and setter.
  //! Don't forget to put a comma after accessor methods
  get r() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  },
  set r(newValue) {
    var oldValue = Math.sqrt((this.x * this.y) + (this.x * this.y));
    var ratio = newValue / oldValue;
    this.x *= ratio;
    this.y *= ratio;
    console.log(this.x);
    console.log(this.y);
    
    
  },
  //! theta is a read-only accessor property with getter only.
  get theta() {
    console.log(this.x);
    console.log(this.y);
    
    return Math.atan2(this.y, this.x);
  }
}


var q = inherit(p);
q.x = 1;
q.y = 1;
console.log(q.r);
console.log(q.theta);
q.r = 4;
console.log(q.r);
console.log(q.theta);



// Another use of accessor property.
var serialNum = {
  // This data property holds the next serial number.
  //! The $ in the property name hints that it is a private property.
  $n : 0,

  //! Return the current value and increment it.
  get next(){
    return this.$n++;
  },

  //! set a new value of n, but only if it is larger than current.
  set next(n){
    if(n >= this.$n) this.$n = n;
    else throw "serial number can only be set to a larger value";
  }
};

// Another example
var random = {
  get octet(){ return Math.floor(Math.random()*256); },
  get uint16(){ return Math.floor(Math.random()*65536); },
  get int16(){ return Math.floor(Math.random()*65536)-32786 }
};
console.log(random.octet);
console.log(random.uint16);
console.log(random.int16);


