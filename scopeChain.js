let userName="Sarah";
let userRole="Admin";
function checkAccess()
{
    let hasAccess=false;
    if(userRole==="Admin")
    {
        let welcomeMsg=`${userName} you have admin privilege`;
        hasAccess=true;
        console.log(welcomeMsg);
    }
    console.log("Has Access:", hasAccess);
}
checkAccess();
