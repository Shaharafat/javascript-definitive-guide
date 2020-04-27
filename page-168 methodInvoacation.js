var calculator = {
	operand1 : 1,
	operand2 : 4,
	add : function(){
		//Note the use of the this keyword to refer to this object.
		this.result = this.operand1 + this.operand2;
	}
};

calculator.add();
console.log(calculator.result);

console.log(calculator['result']) //another way to invoke a method.