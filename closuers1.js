function fun1()
{
    console.log("Inside fun1()");
    function fun2()
    {
        console.log("Inside fun2()");
    }
    return fun2;
}
exmp=fun1();
exmp();
