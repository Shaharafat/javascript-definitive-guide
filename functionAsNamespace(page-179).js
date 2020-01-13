/* 
 * Define an extend function that copies the proprties of its second and subsequent
 * arguments onto its first argument.
 * We work around an IE bug here: in many versions of IE, the for/in loop wont
 * enumerate an enumerable property of o if the prototyep of o has a nonenumerable property by 
 * the same name, This means that properties like toString arenot handled correctly unless we * explicitly check for them.
 * like toString are not handled correctly unless we explicitly check for them.
*/

var extend = (function(){ //? Assign the return valye of this function.
 //! First check for the presence of the bug before patching it. 
 for(var p in {toString:null}){
   //? If we get here, then the for/in loop woeks correctly and we return 
   //? a simple version of the extend() function.
   return function extend(o){
     for(var i = 1; i<arguments.length;i++){
       var source = arguments[i];
       for(var props in source) o[prop] = source[prop];
     }
     return o;
   };
 }
 /* 
  * If we get herem, it means that the for/in loop did not enumerate the toString property of * the test object. So return a version of the extend() funtion that explicitly tests for the * nonenumerable properties of Object.Prototype.
 */

//  ? This is the list of special-case propertis we check for.
var protoProps = ["toString","valueOf","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString"];

return function patched_extend(o){
  for(var i = 1; i< arguments.length;i++){
    var source = arguments[i];
    //? copy all the enumerable properties.
    for(var prop in source) o[prop] = source[prop];

    // ? And now check the special-case properties.
    for(var j = 0; j< protoProps.length; j++){
      prop =protoProps[j];
      if(source.hasOwnProperty(prop)) o[prop] = source[prop];
    }
  }
  return o;
};
}());