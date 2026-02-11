let heightInMeters = 1.75;
let weightINKILOGRAMS = 70;
let bmi = weightINKILOGRAMS / ( heightInMeters**2);
if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi.toFixed(2)}. You are underweight.`);
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log(`Your BMI is ${bmi.toFixed(2)}. You have a normal weight.`);
} else if (bmi >= 25 && bmi < 29.9) {
    console.log(`Your BMI is ${bmi.toFixed(2)}. You are overweight.`);
}