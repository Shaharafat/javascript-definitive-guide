console.log("5" * "10");

console.log(2/"rest");
console.log(2/2);

console.log(2*2);
console.log(2*"t");

console.log(2-2);
console.log(2-"t");

// !Addition

console.log(typeof(1+2));

console.log(typeof(1+"2"));

console.log("hello" + " " + "there");

console.log("1" + "2");

console.log(1+{});

console.log(1 + null);

console.log(+10);

console.log(-"10");

console.log(-{});

var x = 10
console.log(x++);
console.log(++x);


console.log(x--);
console.log(--x);


// !BITWISE OPERATOR
console.log(parseInt(0x1234 & 0x00FF, 16));
console.log(0x1234 | 0x00FF);
console.log(0xFF00 ^ 0xF0F0);
console.log(~0xFFFF);


console.log("1" == true);

// !comparison operator

console.log(1+2);
console.log("1" + "2");
console.log("1"+2);
console.log(11<3)
console.log("11"<"3");
console.log("11" < 3);
console.log("one" < 3);

// !in Operator
var point = {x:1,y:1};
console.log("x" in point);

console.log("z" in point);

console.log("toString" in point); //object inherits toString method

var data = [7,8,9];

console.log("0" in data);

console.log(1 in data);

console.log(3 in data);

// !instanceOf Operator

// ! OBJECT instanceOf CLASS
var d = new Date();
console.log(d instanceof Date);
console.log(d instanceof Object);
console.log(d instanceof Number);

var a = [1,2,3];
console.log(a instanceof Array);
console.log(a instanceof Object);
console.log(a instanceof RegExp);

//! console.log(valueOf([12,3,4,6]));

// !LOGICAL EXPRESSION

// !     &&

var o = {x:1};
var p = null;
console.log(o && o.x);
console.log(p && p.x);
var x=0,y=0;
console.log(x == 0 && y == 0);

// !SHORT CIRCUITING
var a=1, b = 2;
// if(a == b) stop();
(a == b) && console.log("true");

// !SC with ||
(a == b) || console.log("a is on equal to b");
var max_width, preference = {max_width:null};
var max = max_width || preference.max_width || 500;
console.log(max);

var p = 2,q = 1;
console.log(!(p && q));
console.log(!(p || q));
var x = 1;
console.log(!!x);
var data = [1,2,3,4], i = 0;
console.log(data[i++] *= 2);
console.log(data[i++] = data[i++] * 2);

console.log(data);

console.log(eval("3+2"));

console.log(eval("3/2"));
console.log(eval("257*8"));
