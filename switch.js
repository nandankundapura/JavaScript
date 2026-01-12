let userRole="student";

switch(userRole)
{
    case "admin":
      console.log("full access granted");
       break;
    case "editor":
        console.log("editor access granted");
        break;
    case "author":
      console.log("author access granted");
       break;
    case "student":
      console.log("student access granted");
       break;
    default:
        console.log("access denied");
}

let day=2;
switch(day)
{
    case 0:
    case 6:
        console.log("Happy weekend");
    case 2:
    case 3:
    case 4:
    console.log("Happy midweek");
    case 5:
        console.log("TGIF");
}
