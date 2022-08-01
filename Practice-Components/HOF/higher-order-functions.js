/**
 * Here callMe is a HOF which when called returns another anonymous function
 */
function callMe() {
  return function () {
    return console.log('Function O/P returned from a HOF');
  };
}

/**
 * Below is the first class function which is store in *variable, x
 */
let firstClassFunction = () =>
  console.log('Successfully called first class function');

let button = document.getElementById('test-button');
/*
 *Here addEventListener() is a HOF which takes another function
 *as a paramter
 */
button.addEventListener('click', firstClassFunction);

/**
 * Below is the imediately invoked function
 */
(() => {
  console.log(callMe()()); //Here double () is used because callMe() will return a function, since call() is HOF, so to execute returned function () is used.
  //return console.log('IIF is called');
})();
