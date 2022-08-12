const button = document.querySelector('.test-button');
const button2 = document.querySelector('.test-button2');
const testDiv = document.querySelector('.test-div');

const event = new Event('start');

document.addEventListener('start', () => {
  console.log('Start event triggered');
});

(() => {
  if (1) {
    document.dispatchEvent(event);
  }
})();

button.addEventListener('start', () => {
  console.log('cooooooooo');
});
