const object = {a:1,b:2,c:3};
for(const property in object){
  console.log(`obj.${property}: ${object[property]}`);
  
}

var triangle = {a:1,b:2,c:3};
function ColoredTriangle(){
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for(const prop in obj){
  if(obj.hasOwnProperty(prop)){
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
  console.log(obj[prop] + "  inherited properties");
  
}