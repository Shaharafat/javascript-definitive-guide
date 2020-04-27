var random = {
  get octet(){return Math.floor(Math.random()*256);},
  get uint16() { return Math.floor(Math.random()*65536); }
}

console.log(random.uint16);
console.log(random.octet);


