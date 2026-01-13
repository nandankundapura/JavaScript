/*
console.log(a);
let a=100;       
*/  
//error



/* 
console.log(a);
var a=100;
console.log(a); 
*/    //output: undefined,  100
//Because of Hoisting

var b;
console.log(b);
b=100;
console.log(b);


greet();
function greet()
{
    console.log("Hello");
}
