var scope = "global scope"

function checkScope() {
  var scope = "local scope"

  function f() {
    return scope
  }
  return f()
}

var result = checkScope()
console.log(result);


function checkScope2() {
  var scope = "local Scope"

  function f() {
    return scope
  }
  return f
}

console.log(checkScope2()());


// will return 'local scope' because of the fundamental rules
// of lexical scoping: JavaScript functions are executed using the scope chain that was 
// in effect  when they were defined.
checkScope2()()


//implementing closures
var uniqueInteger = (function () {
  var counter = 0
  return function () {
    return counter++
  }
}()) // here counter will become private variable . after returning the outer function only this nested function will be able to access this counter variable.
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());


// it is perfectly possible for two or more nested functions to be defined within the same outer funciton and share the same scope chain. 
function counter() {
  var n = 0;
  return {
    count: function () {
      return n++
    },
    reset: function () {
      return n = 0;
    }
  }
}

var c = counter(), d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());
// if you call counter twice , you get two counter objects with different private variables.
// calling count() or reset() on one counter object has no effect on the other.


// It is worth noting here that can combine this closure technique with property getters and setters.
function counter2(n) {
  return {
    get count() {return n++},
    // property setter dows not allow the value of no to decrease.
    set count(m) {
      if (m > n) n = m;
      else throw Error("Count can only be set to a larger value.")
    }

  }
}


let cnt = counter2(1000)
console.log(cnt.count);

console.log(cnt.count);
console.log(cnt.count);
cnt.count = 2000
console.log(cnt.count);
console.log(cnt.count);
// cnt.count = 2000




// This function adds property accessor methods for a proptery with the specified name to 
// the object o. This method are named get <name>
// and set<name>. If a predicate funciton is supplied, the setter method uses it to test its argument for validity 
// before storing it.
// If the prodicate returns false, the setter method throws an exception.

function addPrivateProperty(o, name, predicate) {
  var value // This is the property value.
  o['get'+name] = function(){return value}
  //The setter method stores the value or throws an exception if
  // the predicate rejects the value.
  o['set' + name] =function(v){
    if (predicate && !predicate(v)) {
      throw Error("set"+name+":invalid value " + v)
    } else {
      value = v
    }
  }
}


//The following code demonstrates the addPrivateProperty() method.
var o = {}

//Add property accessor method getName and setName()
//Ensure that only string values are allowed
addPrivateProperty(o, "Name", function (x) { return typeof x == 'string';})
o.setName("Arafat")
console.log(o.getName());
// o.setName(0)




// this function returns a function that always returns v
function constfunc(v) { return function () { return v;}}

//create an array of constant function.

var func = []
for (var i = 0; i < 10;i++)func[i] = constfunc(i)
console.log(func[5]());


// another implementation of the code above


//return an array of functions that return the values 0 - 9 
function constFunc() {
  var func = []
  for (var i = 0; i < 10; i++)
    func[i] = function(){return i}
    return func
}

var funcs = constFunc()
// func[5]()
console.log(funcs[5]());

//! It is important to remember that the scope chain associated with a closure is live. 
//! Nested functions do not make private copies of the scope or make static snapshots of the variable bindings.


//! every function invocation has a this value. and a closure cannot access the this value of its value of its outer function unless the outer function has saved that values into a variable.

var self = this; // save this in a variable for use by nested func.

// ! The argument binding is similar. This is not a language keyword. but it is automatically declared for every functions invocation. since a closure has its own binding for arguments, it cannot access the outer functions arguments array unless the outer function has saved that array into a variable by a different name.

var outerArguments = arguments; 

