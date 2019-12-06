var o = {
  x: 1,
  y: 2
};

delete o.x;
console.log(typeof o.x);
console.log(delete o.x);
console.log(delete o);
console.log(delete 1);
this.x = 1;
console.log(delete x);


"use strict mode"
console.log(delete this.x);



var x = 2;
y=2;
console.log(delete x);

console.log(typeof y);
