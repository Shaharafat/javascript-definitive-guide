// A simple function for defining simple classes

// extend function
function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

function defineClass(
  constructor, // A functions that sets instance properties
  methods, // Instance methods: copied to prototype
  statics // Class properties: copied to constructor
) {
  if (methods) extend(constructor.prototype, methods);
  if (statics) extend(constructor, statics);
  return constructor;
}

// This is a simple variant of out Range class.
var SimpleRange = defineClass(
  function (f, t) {
    this.f = f;
    this.t = t;
  },
  {
    includes: function (x) {
      return this.f <= x && x <= this.t;
    },
    toString: function () {
      return `( ${this.f} ... ${this.t} )`;
    }
  },
  {
    upto: function (t) {
      return new SimpleRange(o, t);
    }
  }
);

// console.log(SimpleRange.includes(2));
let sR = new SimpleRange(1, 3);
console.log(sR);
console.log(sR.includes(2));

// console.log(sR.upto(2i));

// let sR2 = sR.upto(5)
