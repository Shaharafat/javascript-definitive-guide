//  Create a single global variable to hold all collection-related modules

var collections
if(!collections) collections = {}

// Now define the sets module
collections.sets = (function namespace() {
  // Define the various set classes here, using local variables and function
  // ... lots of code ommited

  // Now export our API by returning a namespace object. 
  return {
    // Exported property name: local variable name
    AbstractSet: AbstractSet,
    NotSet: NotSet,
    AbstractEnumerableSet: AbstractEnumerableSet,
    SingletonSet: SingletonSet,
    AbstractWritableSet: AbstractWritableSet,
    ArraySet: ArraySet,
  }
}());



// A similar technique is to treat the module function as a constructor,
// invoke it with new, and export values by assigning them to this

var collection;
if(!collection) collection = {}
collection.sets = (new function namespace() {
  
  // ... lots of code omitted ....
  //  New export our API to the this object
  this.AbstractSet = AbstractSet;
  this.NotSet = NotSet // And so on.... 

  // Note no return value. 
}())



// As an alternative, if a global namespace object has already been defined.
// the module function can simply set properties of that object directly, 
// and not bother returning anything at all

var collectionss;
if(!collectionss) collectionss = {}
collectionss.sets ={}
  (function namespace() {
  // ... lots of code omitted
    // now export out public API to the namespace object created above
    collectionss.sets.AbstractSet = AbstractSet;
    collectionss.sets.NotSet = NotSet;

    // No return statement is needed since exports were done above.
})

