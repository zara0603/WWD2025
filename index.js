const FreezingPoint = 0;
let tempCelsius = 20;
let tempFahrenheit = (tempCelsius * 9/5) + 32;
console.log(`${tempCelsius}°C is equal to ${tempFahrenheit}°F`);
if (tempCelsius <= FreezingPoint) {
    console.log("Warning: Temperature is at or below freezing point!");
}