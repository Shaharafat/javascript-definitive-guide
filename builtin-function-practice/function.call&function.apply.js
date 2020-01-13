var biggest = Math.max.apply(Math, [1,2,3,4,5]);
console.log(biggest);


function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese);
console.log(fun);

/* 
 * Note that apply() works with array-like objects as well as true arrays. In particular , you can invoke a function with the same arguments as the current function by passing the arguments array directly apply() . The following code demonstrate: 
*/

// ? Replace the method named m of the object o with a version that logs messages before and agter inboking the original method.
function trace(o,m){
  var original = o[m];
  o[m] = function(){
    console.log(new Date(),"Entering:", m);//log message
    var result = original.apply(this,arguments); // Invoke original
    console.log(new Date(), " Existing:" , m); //log message
    return result;    //return result.
  };
}

var obj = {m: function(a){return a;}}
console.log(trace(obj,obj.m(new Date())));
