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
    actvemultipier = 1.375;
} else if(activity === "moderate"){
    activeMultipier = 1.55;
} else if(activity === "active"){
    activityMultipier = 1.725;
} else if(activity === "very-active"){
    activityMultipier = 1.9;
} else {
    console.log("Invalid activity level, we default to it little(1.2).");
    activityMultiplier = 1.2;
}

