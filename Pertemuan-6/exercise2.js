//ubah atau modeifikasi exercise 1 ttg bmi menggunakan 1. IIFE 2. Callback Function
//1. IIFE
let bmi = (function (b, t) {
  let bmiValue = b / (t * t);
  return bmiValue;
})(65, 170 / 100);

console.log("BMI:", bmi.toFixed(4));

//2. callback
function hit(b, t, callback) {
  let bmi = b / (t * t);
  callback(bmi);
}

let b = 65;
let t = 170 / 100;

hit(b, t, function (bmi) {
  console.log("BMI:", bmi.toFixed(4));
});
