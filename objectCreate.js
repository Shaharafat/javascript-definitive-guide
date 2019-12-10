var empty = {};
var point = {
  x: 0,
  y: 0
};
var point2 = {
  x: point.x,
  y: point.y + 1
};

var book = {
  "main title": "javascript",
  'sub-title': "The Definitive Guide",
  "for": "all audiences",
  author: {  //without quote
    firstName: "David",
    surname: "Flanagan"
  },
  if:2,
};

// create object with new keyword
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp();

var o1 = Object.create({x:1,y:2});
console.log(o1);

var o2 = Object.create(null); 

// create and ordinary empty object
var o3 = Object.create(Object.prototype);
