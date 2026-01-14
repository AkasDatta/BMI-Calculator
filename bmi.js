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




// Total Daily Energy Expenditure(TDEE) Calculation

let activityMultiplier;

if(activity === "sedentary"){
    activityMultiplier = 1.2; 
} else if(activity === "light"){
    activityMultiplier = 1.375;
} else if(activity === "moderate"){
    activityMultiplier = 1.55;
} else if(activity === "active"){
    activityMultiplier = 1.725;
} else if(activity === "very-active"){
    activityMultiplier = 1.9;
} else {
    console.log("Invalid activity level, we default to it little(1.2).");
    activityMultiplier = 1.2;
}

let tdee = bmr * activityMultiplier;
console.log(`Your tdee is, ${tdee}`);


// BMI Category 

 let bmiCategory;

 if( bmi < 18.5) {
    bmiCategory = "Underweight";
 } else if ( bmi >= 18.5 && bmi < 24.9){
    bmiCategory = "Normal weight";
 } else if ( bmi >= 25 && bmi <= 30){
    bmiCategory = "Overweight";
 } 
 else {
    bmiCategory = "Obese";
 }

console.log(bmiCategory);


// Calories for Goals 

const loseWeight = tdee - 500;
const gainWeight = tdee + 500;

console.log(`To lose weight, you should consume around ${loseWeight} calories per day.`);
console.log(`To gain weight, you should consume around ${gainWeight} calories per day.`);


// --- Output ---
console.log("=== BMI & Calorie Calculator ===");
console.log(`Weight: ${weight} kg`);
console.log(`Height: ${height} m`);
console.log(`Age: ${age}`);
console.log(`Gender: ${gender}`);
console.log(`Activity Level: ${activity}`);
console.log("-------------------------------");
console.log(`BMI: ${bmi.toFixed(2)} (${bmiCategory})`);
console.log(`BMR (resting calories): ${bmr.toFixed(0)} cal/day`);
console.log(`TDEE (maintenance calories): ${tdee.toFixed(0)} cal/day`);
console.log(`Calories to Lose Weight: ${loseWeight.toFixed(0)} cal/day`);
console.log(`Calories to Gain Weight: ${gainWeight.toFixed(0)} cal/day`);


alert(
    // --- Output ---
`=== BMI & Calorie Calculator ===
Weight: ${weight} kg
Height: ${height} m
Age: ${age}
Gender: ${gender}
Activity Level: ${activity}


"-------------------------------"

BMI: ${bmi.toFixed(2)} (${bmiCategory})
BMR (resting calories): ${bmr.toFixed(0)} cal/day
TDEE (maintenance calories): ${tdee.toFixed(0)} cal/day
Calories to Lose Weight: ${loseWeight.toFixed(0)} cal/day
Calories to Gain Weight: ${gainWeight.toFixed(0)} cal/day `
)