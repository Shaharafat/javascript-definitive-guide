var o = {x:1,y:{z:[false,null,""]}};
var s = JSON.stringify(o);
console.log(s);
var p = JSON.parse(s);
console.log(p);
