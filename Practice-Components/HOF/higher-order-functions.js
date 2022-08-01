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
let x = () => console.log('Successfully called first class function');

let button = document.getElementById('test-button');
/*
 *Here addEventListener() is a HOF which takes another function
 *as a paramter
 */
button.addEventListener('click', x);

/**
 * Below is the imediately invoked function
 */
(() => {
  console.log(callMe()());
  //return console.log('IIF is called');
})();
