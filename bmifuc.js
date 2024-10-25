function bmiCalculetor(weight, height) {
    const bmi = weight / (height * height);
  console.log(bmi.toFixed(2));

  if (bmi < 18.5) {
    console.log("you are underweight.");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal.");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("you are overweight.");
  } else {
    console.log("Otherwise, you are obese.");
  }
}
weight = 50;
height = 1.75;
bmiCalculetor(weight, height)
