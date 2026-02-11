let length = 10;
let width = 5;
let radius = 7;
let isCircle = false;
if (isCircle) {
    let area = Math.PI * radius * radius;
    console.log(`The area of the circle is ${area.toFixed(2)}`);
} else {
    let area = length * width;
    console.log(`The area of the rectangle is ${area}`);
}