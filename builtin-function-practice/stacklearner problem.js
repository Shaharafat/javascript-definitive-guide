// var Mobile = function(modelName){
//   this.model = modelName;
// }

// Mobile.prototype.color = "Black";
// var m = new Mobile('Nokia')

// console.log(m.color + ' ' + m.model);

// var Samsung = function(ram){
//   Mobile.call(this,"J2");
//   this.ram = ram;
// }

// Samsung.prototype = Object.create(Mobile.prototype);

// var s = new Samsung('4gb');

// console.log(s.ram + ' ' + s.color);
// console.log(s.model);


// Md Shah Arafat অনেক ধন্যবাদ ভাই আপনাকে।

// কিন্তু একটা প্রশ্ন আমি কি 

var Mobile = function(modelName){
  this.model = modelName;
  // return this.model;
}

Mobile.prototype.color = "Black";

var m = new Mobile('Nokia') // ? এই অবজেক্ট এর কে s অবজেক্ট এ model এ ডিসপ্লে করাতে পারবোন ?

//?আমার কি কি প্রতিবার নতুন constructor এ this এর পাশে আরগুমেন্ট পাছ করেই নিতে হবে ?

console.log(m.color + ' ' + m.model);

var Samsung = function(ram){
  /* call method e j this argument dsen seta this e thakbe. second argument ta Mobile function er first parameter er jonno set hobe. */
  Mobile.call(this,m.model); //? এভাবে করবেন।
  this.ram = ram;
  
}

Samsung.prototype = Object.create(Mobile.prototype);

var s = new Samsung('4gb');

console.log(s.ram + ' ' + s.color);
console.log(s.model);