function calcGrade(student1Marks,Student1MaxMarks)
{
    let studentPercentage=(student1Marks/Student1MaxMarks)*100;
    let studentGrade;

    if(studentPercentage>=90)
    {
        studentGrade='A';
    }
    else if(studentPercentage>=70)
    {
        studentGrade='B';
    }
    else if(studentPercentage>=50)
    {
        studentGrade='C';
    }
    else
    {
        studentGrade='F';
    }
    console.log(studentGrade);
}
calcGrade(92,100);
calcGrade(70,100);
calcGrade(40,50);
