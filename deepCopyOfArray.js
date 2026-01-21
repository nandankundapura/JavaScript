let ar1=[[10,20],[30,40]];
console.log(ar1);
let ar2=structuredClone(ar1);
console.log(ar2);
ar1[1].push(99);
console.log(ar1);
console.log(ar2);


//exp2
let arr1=[{name:"Ann"}, {name:"Ben"}];
console.log(arr1);
let arr2=structuredClone(arr1);
console.log(arr2);
arr1[0].name="Rohit";
console.log(arr1);
console.log(arr2);
