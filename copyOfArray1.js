//Shallow copy
//Using spread Operator
let ar1=[10,20,30,40];
console.log(ar1);
let ar2=[...ar1];   //spread Operator
console.log(ar2);
ar1.push(99);
console.log(ar1);
console.log(ar2);


//Using slice() Operator
let arr1=[10,20,30,40];
console.log(arr1);
let arr2= arr1.slice();   //slice 
console.log(arr2);
arr1.push(99);
console.log(arr1);
console.log(arr2);


//Both will give the same output

