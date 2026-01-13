//Global scope
let a;
function fun()
{
    console.log(a);
}
a=100;
console.log(a);
fun();   //var & let are work same in global scope

//Function scope
 function func()
 {
    let a=200;
    console.log(a);
 }
func(); //var & let are work same in global scope

//Block scope   using let
let temp=30;
if(temp>25)
{
    let coolinTemp=temp-25;
    console.log("Needs cooled by", coolinTemp);
}
else
{
    let heatingTemp=25-temp;
    console.log("Needs to be heated by", heatingTemp);
}
console.log(temp);
// console.log(coolinTemp);
//console.log(heatingTemp);  not executing in let

//Block scope   using var
var tempp=30;
if(tempp>25)
{
    var coolinTempp=tempp-25;
    console.log("Needs cooled by", coolinTempp);
}
else
{
    var heatingTempp=25-tempp;
    console.log("Needs to be heated by", heatingTempp);
}
console.log(tempp);
console.log(coolinTempp);
console.log(heatingTempp);  




