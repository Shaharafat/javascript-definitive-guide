var Range = function (i, r) {
  this.i = i;
  this.r = r;
};

var r = Range(1, 3);
console.log(typeof r);
console.log(Object.prototype.toString.call(r));

// console.log(r.toString());

var obj = new String("Hello");
console.log(obj.toString());
console.log(obj.toString);
console.log(Object.prototype.toString.call(obj));

var nObj = new Number();
console.log(typeof nObj.toString());
console.log(Object.prototype.toString.call(nObj));
console.log(obj.constructor);
console.log(nObj.constructor);
console.log(Range.prototype.constructor);



function typeAndValue(x) {
  if (x == null) return "";
  switch (x.constructor) {
    case Number:
      return `Number: ${x}`;
    case String:
      return `String: ${x}`;
    case Date:
      return `Date: ${x}`;
    case RegExp:
      return `RegExp: ${x}`;
    case Complex:
      return `Complex: ${x}`;
  }
}

let res = typeAndValue(obj);
console.log(res);
