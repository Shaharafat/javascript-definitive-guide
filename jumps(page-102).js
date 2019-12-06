// labeled identifier
// mainloop: while ( token != null ){
//code ommited.
// continue mainloop;
//more code omitted.
// }

var i, j;

loop1:
  for (i = 0; i < 3; i++) { //The first for statement is labeled "loop1"
    loop2: for (j = 0; j < 3; j++) { //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
        continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
    }
  }

console.log("\n");


loop1:
  for (i = 0; i < 3; i++) { //The first for statement is labeled "loop1"
    loop2: for (j = 0; j < 3; j++) { //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
        break loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
    }
  }

// do-while with continue
var count = 0;
do{
  console.log("before continue");
  count++;

  continue;
  console.log("after continue");  
  
}while(count < 5);

// continue in nested loop
for(var i = 0 ; i < 5; i++){
  console.log("outer loop count i = " + i);
  for( var j = 0; j <5; j++){
    if (j == 2) {
      continue;
    }
    console.log("inner loop j = "+ j);
    
  }
  
}


// special case. while can't be as like as for anymore. 
var z =1;
while(z<5){
  try{
    console.log(z);
    if(z===3) break;
  }finally{
    z++;
  }
}
console.log("Incremented the z though it was break, now it is " + z);