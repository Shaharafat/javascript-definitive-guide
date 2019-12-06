function test(o) {
  var i = 0;
  if (typeof o == "object") {
    var j = 0;
    for (var k = 0; k < 10; k++) {
      console.log(k);
    }
    console.log(k);
  }
  console.log(j);

}

var scope = "global";

function f() {
  console.log(scope); //!HOISTING
  var scope = "local"
  console.log(scope);
}

f();

function ff() {
  var scope;
  console.log(scope);
  scope = "local";
  console.log(scope);
}

ff();