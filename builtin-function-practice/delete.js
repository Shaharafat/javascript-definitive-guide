/* 
 * The JavaScript delete removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
*/

const Employee = {
  firstname: 'John',
  lastname: 'Doe'
}

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined


/* 
 * Return value
 * true for all cases except when the property is an own non-configurable property, in which case, false is returned in non-strict mode.
*/

/* 
 * Unlike what common belief suggests, the delete operator has nothing to do with directly freeing memory. Memory management is done indirectly via breaking references. See the memory management page for more details.

 * The delete operator removes a given property from an object. On successful deletion, it will return true, else false will be returned. However, it is important to consider the following scenarios:

 * If the property which you are trying to delete does not exist, delete will not have any effect and will return true
 * If a property with the same name exists on the object's prototype chain, then, after deletion, the object will use the property from the prototype chain (in other words, delete only has an effect on own properties).
 * Any property declared with var cannot be deleted from the global scope or from a function's scope.
 * As such, delete cannot delete any functions in the global scope (whether this is part from a function definition or a function expression).
 * Functions which are part of an object (apart from the global scope) can be deleted with delete.
 * Any property declared with let or const cannot be deleted from the scope within which they were defined.
 * Non-configurable properties cannot be removed. This includes properties of built-in objects like Math, Array, Object and properties that are created as non-configurable with methods like Object.defineProperty().
*/

var Employe = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employe.name);   // returns true
console.log(delete Employe.age);    // returns true

// When trying to delete a property that does 
// not exist, true is returned 
console.log(delete Employe.salary); // returns true


/* 
 * Non-configurable properties
 * When a property is marked as non-configurable, delete won't have any effect, and will return false. In strict mode this will raise a SyntaxError.
*/

var Employees = {};
Object.defineProperty(Employees, 'name', {configurable: false});

console.log(delete Employees.name);  // returns false


/* 
 * var, let and const create non-configurable properties that cannot be deleted with the delete operator:
*/

var nameOther = 'XYZ';

// We can access this global property using:
// Object.getOwnPropertyDescriptor(window, 'nameOther');  

// output: Object {value: "XYZ", 
//                  writable: true, 
//                  enumerable: true,
//                  configurable: false}

// Since "nameOther" is added using with the
// var keyword, it is marked as "non-configurable"

delete nameOther;   // return false

"use strict";
function Employeess() {
  // delete salary;  // SyntaxError
  var salary;        
}

console.log(delete Employeess);

/* 
 * Strict vs. non-strict mode
 * When in strict mode, if delete is used on a direct reference to a variable, a function argument or a function name, it will throw a SyntaxError.

 * Any variable defined with var is marked as non-configurable. In the following example, salary is non-configurable and cannot be deleted. In non-strict mode, the delete operation will return false.
*/

// function Employee() { 
//   delete salary;
//   var salary;
// }

// Employee();


"use strict";

// function Employee() {
//   delete salary;  // SyntaxError
//   var salary;        
// }

// Similarly, any direct access to a function
// with delete will raise a SyntaxError

function DemoFunction() {
  //some code
}

delete DemoFunction; // SyntaxError