// String literals, arrow function, default

// String literals

let fullName = "ando";
let age = 21;
let address = "langowan";

let kalimat =
  " halo nama saya" +
  fullName +
  "umur saya" +
  age +
  " tahun dan saya tinggal di" +
  address;
console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

//2. Arrow Function

function sayGreetings1(fullName) {
  return `halo nama saya ${fullName}`;
}
console.log(sayGreetings1("ando"));

const sayGreetings2 = (fullName) => `halo nama saya ${fullName}`;
console.log(sayGreetings2("ando"));

// Arrow Function pada IIFE
let output1 = (() => `hello`)();

//Arrow Function pada callback
let num = [1, 2, 3, 4, 5];
let output2 = num.map((item) => item);
console.log(output2);

// Default Parameter

const sayGreetings3 = (fullName) => {
  if (!fullName) {
    fullName = "ando";
  }
  if (!age) {
    age = 21;
  }
  if (!address) {
    address = "langowam";
  }
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
  );
};
sayGreetings3("ando");

const sayGreetings4 = (fullName = "ando", age = 32, address = "langowan") => {
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
  );
};
sayGreetings4();
