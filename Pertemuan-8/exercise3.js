let ando = {
  firstName: "Revando",
  b: 65,
  t: 1.78,
  Calculate: function () {
    let bmi = this.b / (this.t * this.t);
    console.log("Your BMI: " + bmi.toFixed(2));
    if (bmi < 16.0) {
      console.log("Severely Underweight");
    } else if (bmi > 16.0 && bmi <= 18.4) {
      console.log("Underweight");
    } else if (bmi > 18.5 && bmi <= 24.9) {
      console.log("Normal");
    } else if (bmi > 24.9 && bmi <= 29.9) {
      console.log("Overweight");
    } else if (bmi > 29.9 && bmi <= 34.9) {
      console.log("Moderately Obese");
    } else if (bmi > 35.0 && bmi <= 39.9) {
      console.log("Severely Obese");
    } else if (bmi > 40.0) {
      console.log("Morbidly Obese");
    }
  },
};
console.log(ando.Calculate());
