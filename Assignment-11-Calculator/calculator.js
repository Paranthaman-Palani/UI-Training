const calculator  = {
    add: function (a,b){  return (a+b); },
    sub:function (a,b) { return (a-b);  },
    mul: function(a,b) {  return(a*b);   },
    div: function (a,b){ return (a/b);  }  
}
let a = parseInt(prompt("Enter First Value : "));
let b = parseInt(prompt("Enter Second Value: "));
        if(isNaN(a) || isNaN(b))
            alert( "Please Enter the value as number :)");
        else {
            
            console.log("ADDITION : " + calculator.add(a,b));
            console.log("SUBTRACTION : " + calculator.sub(a,b));
            console.log("MULTIPLICATION : " + calculator.mul(a,b));
            console.log("DIVISION : " + calculator.div(a,b));
        }



