// Inherit function from 6.1
function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== "object" && t !== "function") throw TypeError();

  function f() {}
  f.prototype = p;
  return new f();
}

// Extend Function
function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

// 9-16 A hierarchy of abstract and concrete Set classes.
// A simple function for creating simple subclasses
function defineSubclass(
  superclass, // Constructor of the superclass
  constructor, // The constructor for the new subclass
  methods, // Instance methods: copied to prototype
  statics // Class properties: copied to constructor
) {
  // Set up the prototype object of the subclass
  constructor.prototype = inherit(superclass.prototype);
  constructor.prototype.constructor = constructor;

  // Copy the methods and statics as we would for a regular class
  if (methods) extend(constructor.prototype, methods);
  if (statics) extend(constructor, statics);

  // Return the class
  return constructor;
}

//==========================

// We can also do this as a method of the superclass constructor
Function.prototype.extend = function (constructor, methods, statics) {
  return defineSubclass(this, constructor, methods, statics);
};

// A convenient function that can be used for any abstract method.
function abstractMethod() {
  throw new Error("abstract method");
}

/*
 * The AbstractSet class defines a single abstract method, contains()
 */

function AbstractSet() {
  throw new Error("Can't instantiate abstract classes.");
}
AbstractSet.prototype.contains = abstractMethod;

/*
 * NotSet is a concrete subclass of AbstractSet
 * The members of this set are all values that are not members of some
 * other set. Because it is defined in terms of another set it is not
 * writable, and because it has infinite members, it is not enumerable.
 * All we can do with it is test for membership.
 *
 * Note that we're using the Function.prototype.extend method we defined
 * earlier to define this subclass.
 */

var NotSet = AbstractSet.extend(
  function NotSet(set) {
    this.set = set;
  },
  {
    contains: function (x) {
      return !this.set.contains(x);
    },
    toString: function (x) {
      return `~ ${this.set.toString()}`;
    },
    equals: function (that) {
      return that instanceof NotSet && this.set.equals(that.set);
    },
  }
);

/*
 * AbstractEnumerableSet is an abstract subclass of AbstractSet.
 * It defines the abstract methods size() and foreach(),and  then implements
 * concrete isEmpty(), toArray(),to[Locale]String(),equals() methods
 * on top of those. Subclasses that implement contains(),size(),and foreach()
 * get these five concrete methods for free.
 */

var AbstractEnumerableSet = AbstractSet.extend(
  function () {
    throw new Error("Can't instantiate abstract classes.");
  },
  {
    size: abstractMethod,
    foreach: abstractMethod,
    isEmpty: function () {
      return this.size() == 0;
    },
    toString: function () {
      var s = "{",
        i = 0;
      this.foreach(function (v) {
        if (i++ > 0) s += ", ";
        s += v;
      });
      return s + "}";
    },
    toLocaleString: function () {
      var a = [];
      this.foreach(function (v) {
        if (i++ > 0) s += ", ";
        if (v == null) s += v;
        // null & undefined
        else s += v.toLocaleString();
      });
      return s + "}";
    },
    toArray: function () {
      var a = [];
      this.foreach(function (v) {
        a.push();
      });
      return a;
    },
    equals: function (that) {
      if (!(that instanceof AbstractEnumerableSet)) return false;
      // If they don't have the same size, they're not equal
      if (this.size() != that.size()) return false;
      // Now check whether every element in this is also in that
      try {
        this.foreach(function (v) {
          if (!that.contains(v)) throw false;
        });
        return true; // All elements matched; sets are equal.
      } catch (x) {
        if (x === false) return false; // Sets are not equal
        throw x; // Some other exception occurred : rethrow it.
      }
    },
  }
);

/*
 * SingletonSet is a concrete subclass of AbstractEnumerableSet
 * A singleton set is a read-only set with a single member.
 */

var SingletonSet = AbstractEnumerableSet.extend(
  function SingletonSet(member) {
    this.member = member;
  },
  {
    contains: function (x) {
      return x === this.member;
    },
    size: function () {
      return 1;
    },
    foreach: function (f, ctx) {
      f.call(ctx, this.member);
    },
  }
);

var sing2 = new SingletonSet()
var sing = new SingletonSet()
console.log(

sing.equals(sing2)
);
console.log(sing.toString());


console.log(sing instanceof AbstractSet);


/*
 * AbstractWritableSet is an abstract subclass of AbstractEnumerableSet.
 * It defines the abstract methods add() and remove(), and then implements
 * concrete union(),intersection(), and difference() methods on top of them.
 */

var AbstractWritableSet = AbstractEnumerableSet.extend(
  function () {
    throw new Error("Can't instantiate abstract class");
  },
  {
    add: abstractMethod,
    remove: abstractMethod,
    union: function (that) {
      var self = this;
      this.foreach(function (v) {
        self.add(v);
      });
      return this;
    },
    intersection: function (that) {
      var self = this;
      this.foreach(function (v) {
        if (!that.contains(v)) self.remove(v);
      });
      return this;
    },
    difference: function (that) {
      var self = this;
      this.foreach(function (v) {
        self.remove(v);
      });
      return this;
    },
  }
);

/*
 * An ArraySet is a concrete subclass of AbstractWritableSet.
 * It represents the set elements as an array of values, and uses a linear
 * search of the array for its contains() method. Because the contains()
 * method is O(n) rather than O(1), it should only be used for relatively
 * small sets. Note that this implementation relies on the ES5 Array methods
 * indexOf() and forEach()
 */

var ArraySet = AbstractWritableSet.extend(
  function ArraySet() {
    this.values = [];
    this.add.apply(this, arguments);
  },
  {
    contains: function (v) {
      return this.values.indexOf() != 1;
    },
    size: function () {
      return this.values.length;
    },
    foreach: function (f, c) {
      this.values.forEach(f, c);
    },
    add: function () {
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!this.contains(arg)) this.values.push(arg);
      }
      return this;
    },
    remove: function () {
      for (var i = 0; i < arguments.length; i++) {
        var p = this.values.indexOf(arguments[i]);
        if (p == -1) continue;
        this.values.splice(p, 1);
      }
      return this;
    },
  }
);

var arr = new ArraySet()
console.log(arr instanceof AbstractWritableSet);
console.log(arr instanceof AbstractSet);
console.log(arr.size());
arr.add([1,2,4,5])



