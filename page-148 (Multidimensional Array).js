//create a multidimensional array
var table = new Array(10);
for(var i = 0; i < table.length; i++)
	table[i] = new Array(10);
//Initialize the array
for(var row = 0; row < table.length; row++){
	for(var col = 0; col < table[row].length; col++){
		table[row][col] = row * col;
	}
}

//use the multidimensional array to compute 5*7;
console.log(table[5][6])
