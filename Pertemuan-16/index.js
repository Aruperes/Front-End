// //Asynchronus JS

// //Synchronus -> single thread -> blocking
// console.log("contoh");
// //Asynchronus -> multi thread -> non-blocking
// //1. Paralel
// setTimeout(() => {
//   console.log("proses 1");
// }, 3000);
// console.log("proses 2");
// setTimeout(() => {
//   console.log("proses 3");
// }, 5000);
// console.log("proses 4");
// //2. Concurrency
// setTimeout(() => {
//   console.log("proses 1");
//   setTimeout(() => {
//     console.log("proses 2");
//     setTimeout(() => {
//       console.log("proses 3");
//       setTimeout(() => {
//         console.log("proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("berhasil");
//   } else {
//     reject("gagal");
//   }
// });

//Cara pakai Promise
//1. then - catch
// newPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//2. Async - Await
// Harus dibuat dalam fungsi

// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//Promise yang sudah ada
//1.fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

// async await

//Axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => console.log(result.data));

async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => console.log(name));
};
