const button = document.querySelector('#test-button');
const button2 = document.querySelector('#test-button2');
const testDiv = document.querySelector('#test-div');

const myEvent = new CustomEvent('myevent', {
  detail: {},
  bubbles: true,
  cancelable: true,
  composed: false,
});

document.querySelector('#test-button').dispatchEvent(myEvent);

document.querySelector('#test-button').addEventListener('myevent', (event) => {
  console.log("I'm listening on a custom event");
});
