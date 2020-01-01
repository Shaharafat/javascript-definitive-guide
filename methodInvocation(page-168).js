var calculator = {
  operand1 : 1,
  operand2:1,
  add: function(){
    //?Note the use of the this keyword to refer to this object.
    console.log(this === calculator);
    
    this.result = this.operand1 + this.operand2;
  }
};
calculator.add();
console.log(calculator.result);

// nested method and this

var o = {
  m:function(){
    var self = this;
    console.log(this === o);
    f();

    function f(){
      console.log(this === o);      
      console.log(this === global);
      console.log(self === o);  
    }
    
  }
};
o.m();
f();