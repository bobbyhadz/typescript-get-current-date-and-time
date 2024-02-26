export {};

// EXAMPLE 1 - Get the current date and time in TypeScript

// 👇️ const now: Date
const now = new Date();

console.log(now);

// ---------------------------------------------------

// // EXAMPLE 2 - Examples of commonly used `Date` object methods

// // 👇️ const now: Date
// const now = new Date();

// console.log(now); // 👉️ 2024-02-26T16:27:15.563Z

// console.log(now.toLocaleDateString()); // 👉️ 2/26/2024

// console.log(now.toLocaleString()); // 👉️ 2/26/2024, 6:27:15 PM

// console.log(now.toUTCString()); // 👉️ Mon, 26 Feb 2024 16:27:15 GMT

// console.log(now.toISOString()); // 👉️ 2024-02-26T16:27:15.563Z

// ---------------------------------------------------

// // EXAMPLE 3 - Formatting the current date and time using TypeScript

// function padTo2Digits(num: number) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date: Date) {
//   return (
//     [
//       date.getFullYear(),
//       padTo2Digits(date.getMonth() + 1),
//       padTo2Digits(date.getDate()),
//     ].join('-') +
//     ' ' +
//     [
//       padTo2Digits(date.getHours()),
//       padTo2Digits(date.getMinutes()),
//       padTo2Digits(date.getSeconds()),
//     ].join(':')
//   );
// }

// // 👇️ YYYY-MM-DD hh:mm:ss
// // 👇️ "2024-02-26 18:28:11" (Current date and time)
// console.log(formatDate(new Date()));

// //  👇️️ 2025-05-04 05:24:07 (yyyy-mm-dd hh:mm:ss)
// console.log(formatDate(new Date('May 04, 2025 05:24:07')));
