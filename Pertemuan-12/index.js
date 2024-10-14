// Rest Parameter & Spread Operator
// 1. Rest Parameter

// Tanpa Rest Parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};

func1("A", "B", "C", "D", "E");

// Dengan Rest Parameter
const func2 = (...params) => {
  //...params bertipe ARRAY
  console.log(params);
};

func2("A", "B", "C", "D", "E");

// Rest parameter harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};

//Mini Exercise
const penjumlahan = (...arr) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 2. Spread Operator

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//ARRAY
//1. Duplikasi ARRAY
let num2 = [...numbers];
numbers.push(6);
console.log(num2);

//2. Menggabungkan ARRAY
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let num3 = array1.concat(array2, array3); //ES5
let num4 = [...array1, ...array2, ...array3]; //ES6

// Object
//1. Duplicate Object
const john = {
  fullName: "john doe",
  age: 30,
};

const john2 = { ...john, address: "manado" };

//2. Menggabungkan Object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combinedOB = { ...obj1, ...obj2 };
