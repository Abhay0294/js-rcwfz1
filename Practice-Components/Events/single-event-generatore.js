let button = document.querySelector('#test-button');

button.addEventListener(
  'click',
  () => {
    console.log('Event generated once');
  },
  { once: true }
);
