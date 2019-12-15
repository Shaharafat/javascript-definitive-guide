var s = {x:1,y:2}.toString();
console.log(s);

var arr = ["hello", "there", 1,2,3];
console.log(toString());

function test (){
  console.log("This function is created in testing purpose");
  
}

console.log(test.toString());

//! The default toLocaleString() mathod defined by Object doesn't do any localization itself: It simply calls toString() and returns that value. The Date and Number classes define customized versions fo toLocaleString() that attempts to format numbers, dates and timmes according to local convensions.
var date = new Date();
console.log(date);

console.log(date.toLocaleString());


console.log(date.valueOf());
