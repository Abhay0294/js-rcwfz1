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

/*
 * Actual blueprint of the promise
 */
// const dataPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/412/618/square_480/JSTesting_4_ReactComponents.png'), 1000); // represents an async operation
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

/**
 * Actual promise implementation
 */
function imageLoad(url) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(error);
      }
    };
    request.send();
    request.onerror = function () {
      reject(Error);
    };
  });
}

var body = document.querySelector('body');
var myImage = new Image();
console.log('@@@@@', myImage);

imageLoad(
  'https://static.vecteezy.com/system/resources/previews/005/594/161/non_2x/qr-code-label-sample-qr-code-for-scan-vector.jpg'
).then(
  function (response) {
    var imageURL = window.URL.createObjectURL(response);
    console.log('>>>><<<<<', imageURL);
    myImage.src = imageURL;
    console.log('<<<<<>>>>>', myImage);
    body.appendChild(myImage);
  },
  function (Error) {
    console.log(Error);
  }
);
