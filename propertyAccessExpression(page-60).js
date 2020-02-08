var o = {
  x: 1,
  y: {
    z: 3
  }
};
var a = [0, 4, [5, 6]];

console.log(o.x);
console.log(o.y.z);
console.log(o["x"]);
console.log(a[1]); 
console.log(a[2][1]);
// console.log(a[0].x);
console.log(-"2");

var data = [1,2,3,4,5],i = 0;
console.log(data[i++] *= 2);
console.log(i);
console.log(data[i++] *= 2);
console.log(data);
console.log(i);
data[i++] = data[i++] * 2;
console.log(data);