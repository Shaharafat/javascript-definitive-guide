console.log(Number("3"));
console.log(String(false));
console.log(Boolean([]));
console.log(Object(3));
console.log(Object(null));
// Object(null);

// undefined.toString();
// null.toString()


var n = 123456.789
console.log(n.toFixed(0));
console.log(n.toFixed(2));
console.log(n.toFixed(3));

console.log(n.toExponential(1));
console.log(n.toExponential(3));
console.log(n.toExponential(5));
console.log(n.toExponential(6));
console.log(n.toExponential(9));

console.log(n.toPrecision(7));
console.log(n.toPrecision(4));


console.log(parseInt("3 blind mice"));
console.log(parseFloat(" 3.14 meters"));
console.log(parseInt("-12.34"));
console.log(parseInt("0xff")); //hexadecimal
console.log(parseInt("-0xff"));
console.log(parseFloat(".1"));
console.log(parseInt("0.1"));
console.log(parseInt(".1"));

console.log(parseFloat("$45.2"));

console.log(parseInt("11",2));
console.log(parseInt("ff",16));
console.log(parseInt("zz",36));
console.log(parseInt("077",8));
console.log(parseInt("007", 10));