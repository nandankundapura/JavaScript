//Function declaration
function add(a,b)
{
    return a+b;
}
console.log(add(10,20));

//Function Expression
let Add=function(c,d)
{
return c+d;
}
console.log(Add(20,30));

//Arrow function
let Multi=(e,f)=>
{
    return e*f;
}
console.log(Multi(5,6));

//OR
let multi=(g,h)=>g*h;
console.log(multi(6,6));

//Immediately Invoked Function Expression (IIFE)
function exmp()
{
    console.log("I ran");
}
exmp();

//Or
(function()
{
    console.log("I ran");
}) ();

