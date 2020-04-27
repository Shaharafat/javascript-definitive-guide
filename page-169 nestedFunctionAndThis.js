/* 
	Unlike variables, the this keyword dows not have a scopr, and nested functionos donot inherit the
	this value of the containing. If a nested function is invoked as a method, its this value is the object it was invoked on . If a nested function is inboked as a function then its this value woll be either the lglobal object (non strict mode) 
	or undefined (strict mode). It is a common mistake to assume that a nested function invoked as a function can use this to obtain the inbocation context of the outer function. If you want to access the this value of the outer function k you need to store that vaoue into 
	a variable that is in scope for the inner function It is common to use the variable self for this purpose.


	page - 169
 */

var o = {
	m: function(){
		var self = this;
		console.log(this === o);
		f();

		function f(){
			console.log(this === o);
			console.log(self === o);
		}
	}
}

o.m()

var func = function(){
	console.log('this is a function');
	var v  = 10;
}

var obj = new func();
console.log(obj.v)