var o = {x:1,y:2,z:3};
console.log(o.propertyIsEnumerable("toString"));
for(p in o) console.log(p);


// ! new method added by som e utility libraries to Object.prototype is enumerable. If you  wnat to make this nonenumerable. try this :-

for(p in o){
  if(!o.hasOwnProperty(p)) continue;
}
// ! or
for(p in o){
  if ( typeof o[p] === "function" ) continue; //! SKIP METHODS.
}