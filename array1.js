let arr=new Array(4);
arr[0]=10;
arr[1]=20;
arr[2]=30;
arr[3]=40;
let i;
for(i=0;i<5;i++)  //forward direction
{
    console.log(arr[i]);
}

//for-of loop using array
let arr1=new Array(4);
arr1[0]=10;
arr1[1]=20;
arr1[2]=30;
arr1[3]=40;
let j;
for(j=arr.length;j>=0;j--)  //Backwar direction
{
    console.log(arr1[j]);
}

//for-of loop
let ar=new Array(5);
ar[0]=10;
ar[1]=20;
ar[2]=30;
ar[3]=40;
ar[4]=50;
for(let x of ar)
{
    console.log(x);
}



