let weight = 56; 
let height = 1.75; 
let bmi = weight / (height * height);
bmi = bmi.toFixed(2);  
if (bmi < 18.5) {
  console.log("you are underweight.");
}
 else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("you are normal.");
}
else if( bmi >=25 &&  bmi <= 29.9){
    console.log('you are overweight.')
}
else{
    console.log('you are obese.');
    
}
