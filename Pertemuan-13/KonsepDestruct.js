// //1. Destructuring (Array & Object)
// //Array
// let buah = ["apel", "jeruk", "pisang"];
// let [buah1, buah2, buah3] = buah; //destrukturisasi
// console.log(buah1);
// console.log(buah2);
// console.log(buah3);

// //Object
// let orang = {
//   nama: "ando",
//   umur: 21,
//   alamat: "langowan",
// };

// let { nama, umur, alamat } = orang; //destrukturisasi
// console.log(nama);
// console.log(umur);

// //2.Destructuring dengan mengambil sebagian item (Array & Object)
// //Array
// const colors = ["red", "green", "blue"];
// const [, secondColor] = colors;
// console.log(secondColor);

// //Object
// const car = { brand: "Hyundai", model: "Palisade", year: 2021 };
// const { brand } = car;
// console.log(brand);

// //3.Destructuring dengan menggunakan default value (Array & Object)
// //Array
// const [a = 5, b = 10] = [1];
// console.log(a);
// console.log(b);
// //Object
// const { nama = "ando", umur = 30 } = { umur: 25 };
// console.log(nama);
// console.log(umur);

// //4.Destructuring dengan menggunakan rest operator (Array & Object)
// //Array
// const [a, ...rest] = [1, 2, 3, 4];
// console.log(a);
// console.log(rest);
// //Object
// const { nama, ...others } = { nama: "ando", age: 25, city: "New York" };
// console.log(nama);
// console.log(others);
