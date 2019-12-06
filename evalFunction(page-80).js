var f = eval;
var g = f;
console.log(g("3*2"));
let x = 2;
console.log(eval("x"));
console.log(eval("var y = 5; y"));
console.log(eval("function f() { return x+1; } f() "));
console.log(f());
let testEval = () => {
  console.log(eval("let x = 4; x"));
  // x = 6;
  console.log(x);
  
  
}
testEval();


var geval = eval;
var x = "global", y = "global";
function f(){
  var x = "local";
  eval("x += 'changed';");
  return x;
}

function g() {
  var y  = "local";
  geval("y += 'changed';");
  return y;
}

console.log(f(),x);
console.log(g(),y);


