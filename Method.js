let score=[85,72,90,67];
let hasGradeA=score.some((x)=> x>85);
console.log(hasGradeA);
let hasPassed=score.every((x)=> x>50);
console.log(hasPassed);


//
let score1=[85,72,76,67];
let hasGradeB=score1.some((y)=> y>85);
console.log(hasGradeB);
let hasPassed1=score1.every((y)=> y>=70);
console.log(hasGradeB);