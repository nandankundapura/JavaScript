//remove element using splice
//spice= (startIndex, deletecount, items)
let ar=[10,20,30,40,50];
console.log(ar);
let remove=ar.splice(2,1);
console.log(ar);
console.log(remove);


//add element using splice
 let arr=[10,20,30,40,50];
 console.log(arr);
 arr.splice(2,0,60);
 console.log(arr);
 arr.splice(2,1,70);
 console.log(arr);

 //delete & add in splice
 let a=[10,20,30,40,50];
 console.log(a);
 let removed_item=a.splice(2,2,60,70);
 console.log(a);
 console.log(removed_item);
 
