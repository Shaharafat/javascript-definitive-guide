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

/*
 * This function creates a new enumerated type. THe argument object specifies
 * the names and values of each instance of the class. The return value
 * is a constructor function that identifies the new class. Note, however
 * that the constructor throws an exception: you can't use it to create new
 * instance of the type. The returned constructor has properties that
 * map the name of a value to the value itself, and also a values array,
 * a foreach() iterator function.
 */

function enumeration(namesToValues) {
  // This is the dummy constructor function that will be the return value.
  var enumeration = function () {
    throw "Can't Instantiate Enumerations";
  };

  // Enumerated values inherit from this object.
  var proto = (enumeration.prototype = {
    constructor: enumeration,
    toString: function () {
      return this.name;
    },

    valueOf: function () {
      return this.value;
    },

    toJSON: function () {
      return this.name; // for serialization
    },
  });
  enumeration.values = []; // An array of the enumerated values objects

  // Now create the instance of this new type
  for (name in namesToValues) {
    // For each value
    var e = inherit(proto); // Create an object to represent it
    e.name = name; // Create an object to represent it
    e.value = namesToValues[name]; // And a value
    enumeration[name] = e; // Make it a property of constructor
    enumeration.values.push(e); // And store in the values array
  }
  // console.log(enumeration.values);
  
  // A class method for iterating the instance of the class
  enumeration.foreach = function (f, c) {
    for (var i = 0; i < this.values.length; i++) {
      f.call(c, this.values[i]);
    }
  };
  // Return the constructor that identifies the new type
  return enumeration;
}

// example 9.8 Representing cards with enumerated types
// function Card(suit, rank) {
//   this.suit = suit; // Each card has a suit
//   this.rank = rank; // and a rank
// }

// // These enumerated types define the suit and rank values
// Card.suit = enumeration({ Clubs: 1, Diamonds: 2, Hearts: 3, spades: 4 });
// console.log(Card.suit);

// Card.rank = enumeration({
//   Two: 2,
//   Three: 3,
//   Four: 4,
//   Five: 5,
//   Six: 6,
//   Seven: 7,
//   Eight: 8,
//   Nine: 9,
//   Ten: 10,
//   Jack: 11,
//   Queen: 12,
//   King: 13,
//   Ace: 14,
// });

// // Define a textual representation for a card
// Card.prototype.toString = function () {
//   return this.rank.toString();
// };

// // Compare the value of two cards as you would in poker
// Card.prototype.compareTo = function (that) {
//   if (this.rank < that.rank) return -1;
//   if (this.rank > that.rank) return 1;
//   return 0;
// };

// // A function for ordering cards as you would in poker
// Card.orderByRank = function (a, b) {
//   return a.compareTo(b);
// };

// // A function for ordering cards as you would in bridge
// Card.orderBySuit = function (a, b) {
//   if (a.suit < b.suit) return -1;
//   if (a.suit > b.suit) return 1;
//   if (a.rank < b.rank) return -1;
//   if (a.rank > b.rank) return 1;
//   return 0;
// };

// // Define a class to represent a standard deck of cards
// function Deck() {
//   var cards = (this.cards = []); // A deck is just an array of cards
//   Card.Suit.foreach(function (s) {
//     // Initialize the array
//     Card.Rank.foreach(function (r) {
//       cards.push(new Card(s, r));
//     });
//   });
// }

// // Shuffle method: shuffles cards in place and returns the deck
// Deck.prototype.shuffle = function () {
//   // For each element in the array, swap with a randomly chosen lower element
//   var deck = this.cards,
//     len = deck.length;
//   for (var i = len - 1; i > 0; i--) {
//     var r = Math.floor(Math.random() * (i + 1)),
//       temp; // Random number
//     (temp = deck[i]), (deck[i] = deck[r]), (deck[r] = temp); // Swap
//   }
//   return this;
// };

// // Deal method: returns an array of cards
// Deck.prototype.deal = function (n) {
//   if (this.cards.length < n) throw "Out of cards";
//   return this.cards.splice(this.cards.length - n, n);
// };

// // Create a new deck of cards, shuffle it, and deal a bridge hand
// var deck = new Deck().shuffle();
// var hand = deck.deal(13).sort(Card.orderBySuit);


// Create a new coin class with four values: Coin.Penny, Coin.Nickel, etc. 
var Coin = enumeration({ Penny: 1, Nickel: 5, Dime: 10, Quarter: 25 })
console.log(Coin);

var c = Coin.Dime
console.log(Coin.Dime);

console.log(c);

// console.log(typeof c);

console.log(c instanceof Coin);
console.log(c.constructor == Coin);

console.log(Coin.Quarter + 3 * Coin.Nickel)
console.log(Coin.Dime == 10);
console.log(Coin.Dime > Coin.Nickel);

console.log(String(Coin.Dime));

console.log(String(Coin.Dime) + ":" + Coin.Dime);


