const height = parseFloat(prompt("Enter your height in meters:"));
const weight = parseFloat(prompt("Enter your weight in kilograms:"));
const gender = prompt("Enter your gender (male/female):");
const age = parseFloat(prompt("Enter your age:"));
const activity = parseFloat(prompt("Enter your activity level (sedentary, light, moderate, active, very-active):"));

// Now BMI calculation
const bmi = weight / (height * height);
console.log(`Your BMI is: ${bmi}`);

