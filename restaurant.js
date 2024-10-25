const age = 80;
const price = 500; 
if (age <= 12) {
  console.log("You can eat for free");
}
 else if (age >= 80) {
  // 50% Discount
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
 else if (age >= 60) {
  // 30% Discount
  const discount = (price * 30) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
 else if (age >= 40) {
  // 50% Discount
  const discount = (price * 40) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
 else {
  console.log(price);
}
