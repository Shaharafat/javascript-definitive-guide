// ?while loop
var count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

// ?do-while loop
function printArray(a) {
  var len = a.length,
    i = 0;
  if (len == 0) {
    console.log("Empty Array");
  } else {
    do {
      console.log(a[i]);
    } while (++i < len);
  }
}

printArray([1, 45, 32, 34, 65344, 534, 56547, 34, 534, 5, 7, 65]);

// ? for loop
for(var count = 0; count < 10; count++){
  console.log(count);  
}

var i,j,sum=0;
for(i = 0 , j = 10; i < 10 ; i++, j--){
  sum += i * j;
}
console.log(sum);


// ?for/in loop
//for(variable in object)
//  statement;

var o = {x:1,y:2,z:3};
var a=[],i=0;
for(a[i++] in o);
console.log(a);
for(i in a) console.log(i);
