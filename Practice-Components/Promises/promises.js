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

// imageLoad(
//   'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/412/618/square_480/JSTesting_4_ReactComponents.png'
// )
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log('Error Occured', error);
//   });

var body = document.querySelector('body');
var myImage = new Image();
// Call the function with the URL we want to load, but then chain the
// promise then() method on to the end of it. This contains two callbacks
imageLoad(
  'https://static.vecteezy.com/system/resources/previews/005/594/161/non_2x/qr-code-label-sample-qr-code-for-scan-vector.jpg'
).then(
  function (response) {
    // The first runs when the promise resolves, with the request.response
    // specified within the resolve() method.
    var imageURL = window.URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
    // The second runs when the promise
    // is rejected, and logs the Error specified with the reject() method.
  },
  function (Error) {
    console.log(Error);
  }
);
