function circleArea(radius)
{
    return Math.PI - radius*radius;
}
function squareArea(side)
{
    return side*side;
}
function equilateralTraingleArea(side)
{
    return (Math.sqrt(3)/4)*side*side;
}
function calculateArea(value, callback)
{
    console.log(callback(value));
}
calculateArea(5,circleArea);
calculateArea(5,squareArea);
calculateArea(5,equilateralTraingleArea);
