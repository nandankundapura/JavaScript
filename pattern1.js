let i;
let j;
let row;
let n=5;
for(i=1;i<=n;i++)
{
     row=" ";
    for(j=1;j<=n;j++)
    {
        if(i==1 || i==n || j==1 || j==n){
            row=row+"*";
        }
        else
        {
            row=row+ " ";
        }
    }
    console.log(row);
 }