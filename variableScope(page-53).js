var scope = "global scope";
function checkscope() {
  var scope = "local scope"
  function nested() {
    var scope = "nested scope"
    return scope;
    // console.log(scope);    
  }

  // console.log(scope);
  
  return nested();  
  
}

console.log(checkscope())