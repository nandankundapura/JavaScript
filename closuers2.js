function outerFunction()
{
    console.log("Outer Fucntion is started execution");
    let outerVar=10;
    function innerFunction()
    {
        console.log("innerFuction started execution");
        console.log("OuterVar:", outerVar);
        console.log("innerFuction finished execution")
    }
    console.log("Outer fuction finished execution");
    return innerFunction;
}
exmp=outerFunction();
exmp();
