let age=18;
console.log(age==18);

let a=20;
console.log(a==18);

let b="NA";
let c="AN";
console.log(b==c);

let hasPassport=true;
console.log(hasPassport==true);

//equality operator
console.log(5=='5');
 
console.log(5==Number('5'));

//Strict equality
console.log(5==='5');

//compare boolean with number
console.log(true==1);
console.log(Number(true)==1);
console.log(true===1);

//comprae boolean with string   implicitly
console.log(true=='1');
//or explicitly
console.log(Number(true)==Number('1'));

//compare null , undefined
console.log(null==undefined);
console.log(null===undefined);

//empty string, zero
console.log(''==0);
console.log(''===0);

//boolean, empty string
console.log(false=='');
console.log(false==='');

//null, false
console.log(null==false);

//undefined,zero
console.log(undefined==0);

//Nan, Nan
console.log(NaN==NaN);
console.log(NaN===NaN);

//string and boolean
console.log('true'==true); 
/* both are coverts  number first,
Number('true')==Number(true)
=>NaN==1
=>output=false
*/
console.log('false'==false);

//string number and number
console.log('001'==1);

console.log('010'==10);

//number and null
console.log(0==null);
console.log(0==undefined);













