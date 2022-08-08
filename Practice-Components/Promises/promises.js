/*
 * Simple explanation of the prmise
 */

/* function doHomeWork(callback) {
  console.log('Doing Homework');
  callback();
}
function copyHomeWork() {
  console.log('HomeWork copied');
}
doHomeWork(copyHomeWork);
*/

/**
 * Actual blueprint of the promise
 */
// const dataPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('data'), 1000); // represents an async operation
// })
//   .then((data) => {
//     console.log('>>>>Success Data<<<<', data);
//   })
//   .catch((error) => {
//     console.log('@@@Error Occurred@@@', error);
//   })
//   .finally(() => {
//     console.log('###Finally called###');
//   });


