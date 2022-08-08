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
    request.responseType = 'Response:200';
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(error);
      }
    };
    request.send();
  });
}

imageLoad(
  'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/412/618/square_480/JSTesting_4_ReactComponents.png'
)
  .then((data) => console.log(data))
  .catch((error) => {
    console.log('Error Occured', error);
  });
