function task1()
{
    console.log("Task1 started..");
    let start=Date.now();
    let delay=6000;
    let end=start+delay;
    console.log("Task1 executing..")
    while(Date.now()<=end)
    {

    }
    console.log("Task1 Completed..")
}
function task2()
{
    console.log("Task2 started..");
    let start=Date.now();
    let delay=6000;
    let end=start+delay;
    console.log("Task2 executing..")
    while(Date.now()<=end)
    {

    }
    console.log("Task2 Completed..")
}
task1();
task2();
