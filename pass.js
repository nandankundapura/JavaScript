//Pass by value
let a=100;
let b;
console.log(a);
console.log(b);
b=200;
console.log(a);
console.log(b);


//pass by reference
let c1={
    name:"BMW",
    cost:75.6,
    mileage:8.9
};
console.log(c1.name);
console.log(c1.cost);
console.log(c1.mileage);
let c2;
c2=c1;
console.log(c2.name);
console.log(c2.cost);
c2.name="KIA";
console.log(c2.name);
console.log(c1.name);