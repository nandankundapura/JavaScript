let a={
    name: "BMW",
    cost: 80.6,
    mileage: 8.6,
    
    start: function()  {
        console.log("Car is starting");
    },
    stop: function() {
        console.log("Car is stopping");
    }
};
console.log(a.name);
console.log(a.cost);
a.start();
a.stop();
