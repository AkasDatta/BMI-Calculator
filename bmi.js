const height = parseFloat(prompt("Enter your height in meters:"));
const weight = parseFloat(prompt("Enter your weight in kilograms:"));
const gender = prompt("Enter your gender (male/female):");
const age = parseFloat(prompt("Enter your age:"));
const activity = parseFloat(prompt("Enter your activity level (sedentary, light, moderate, active, very-active):"));


// Now BMI calculation
const bmi = weight / (height * height);
console.log(`Your BMI is: ${bmi}`);



// BMR Calculation 
let bmr;

if( gender === "male"){
    bmr = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;
}
else {
    bmr = 10 * weight + 6.25 * (height * 100) - 5 * age - 161;
}
console.log(`Your BMR is: ${bmr}`);