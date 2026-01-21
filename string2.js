let s1="JavaScript";
let s2="JavaScript";
console.log(s1==s2);
console.log(s1===s2);
let s3=new String("JavaScript");
console.log(s1==s3);
console.log(s1===s3);
console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);


console.log(s1[2]);   
s1[2]="V";                 //Strings are immutable
console.log(s1[2]);
s1[0]="j";
console.log(s1[0]);