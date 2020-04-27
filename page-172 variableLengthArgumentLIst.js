function f(x,y,z){
	//first verify that the right number of arguments was passed.
	if(arguments.lenth != 3){
		throw new Error('function f called with ' + arguments.length + ' arguments, but it expects 3 arguments.');
	}
	//Now do the actual function....
}

// f(1,2,3,4,5);

function max(/*  */){
	var max = Number.NEGATIVE_INFINITY;
	//loop through the arguments, looking for and remembering,the biggest.
	for(var i = 0; i< arguments.length; i++){
		if(arguments[i] > max) max = arguments[i];
	}

	//return the biggest.
	return max;
}

console.log(max(234,23423,2346,345,434643,3,2,34234,234236,234,673,234,321));