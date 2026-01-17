let ages=[32,15,19,12];
function checkAge(x)
{
    if(x>18)
    {
        return true;
    }
    else
    {
        return false;
    }
}
let result=ages.filter(checkAge);
console.log(ages);
console.log(result);
