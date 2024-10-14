function hit(b, t) {
    let bmi = b / (t * t);
    return bmi;
}
let b = 65; 
let t = 170/100; 
let bmi = hit(b, t);
console.log("BMI:", bmi.toFixed(4));
